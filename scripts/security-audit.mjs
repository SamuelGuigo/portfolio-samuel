import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();

const excludedDirs = new Set([
  ".git",
  "node_modules",
  "dist",
  "coverage"
]);

const excludedFiles = new Set([
  path.normalize("scripts/security-audit.mjs"),
  "security-audit-report.json"
]);

const binaryExt = new Set([
  ".png", ".jpg", ".jpeg", ".gif", ".webp", ".ico",
  ".pdf", ".zip", ".7z", ".rar", ".woff", ".woff2",
  ".ttf", ".otf", ".mp4", ".mov"
]);

const forbiddenNames = [
  /^\.env(?:\.|$)/i,
  /\.(?:pem|key|p12|pfx|jks|keystore)$/i,
  /^(?:id_rsa|id_ed25519)(?:\.|$)/i,
  /\.(?:ovpn|rdp)$/i,
  /\.(?:sql|dump|bak|backup|bkp|sqlite3?|db)$/i
];

const checks = [
  {
    id: "private-key",
    severity: "critical",
    regex: /-----BEGIN (?:RSA |EC |DSA |OPENSSH )?PRIVATE KEY-----/g
  },
  {
    id: "github-token",
    severity: "critical",
    regex: /\bgh[pousr]_[A-Za-z0-9_]{20,}\b/g
  },
  {
    id: "aws-access-key",
    severity: "critical",
    regex: /\bAKIA[0-9A-Z]{16}\b/g
  },
  {
    id: "slack-token",
    severity: "critical",
    regex: /\bxox[baprs]-[A-Za-z0-9-]{10,}\b/g
  },
  {
    id: "credential-assignment",
    severity: "critical",
    regex: /\b(?:password|passwd|pwd|secret|api[_-]?key|access[_-]?token|auth[_-]?token|snmp[_-]?community|community)\s*[:=]\s*["']?[A-Za-z0-9+/_@.$!%*?#=-]{8,}/gi
  },
  {
    id: "basic-auth-url",
    severity: "critical",
    regex: /\bhttps?:\/\/[^/\s:@]+:[^/\s@]+@/gi
  },
  {
    id: "private-ip",
    severity: "high",
    regex: /\b(?:10\.(?:\d{1,3}\.){2}\d{1,3}|192\.168\.(?:\d{1,3}\.)\d{1,3}|172\.(?:1[6-9]|2\d|3[01])\.(?:\d{1,3}\.)\d{1,3})\b/g
  },
  {
    id: "mac-address",
    severity: "high",
    regex: /\b(?:[0-9A-Fa-f]{2}[:-]){5}[0-9A-Fa-f]{2}\b/g
  }
];

function walk(dir) {
  const files = [];

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (excludedDirs.has(entry.name)) continue;

    const full = path.join(dir, entry.name);
    const rel = path.normalize(path.relative(ROOT, full));

    if (entry.isDirectory()) {
      files.push(...walk(full));
      continue;
    }

    if (excludedFiles.has(rel)) continue;
    files.push(full);
  }

  return files;
}

function lineNumber(text, index) {
  return text.slice(0, index).split("\n").length;
}

const findings = [];
const files = walk(ROOT);

for (const file of files) {
  const rel = path.relative(ROOT, file);
  const base = path.basename(file);
  const ext = path.extname(file).toLowerCase();

  for (const pattern of forbiddenNames) {
    if (pattern.test(base)) {
      findings.push({
        severity: "critical",
        id: "forbidden-file",
        file: rel,
        line: 1,
        value: base
      });
    }
  }

  if (binaryExt.has(ext)) continue;

  let text;
  try {
    text = fs.readFileSync(file, "utf8");
  } catch {
    continue;
  }

  for (const check of checks) {
    check.regex.lastIndex = 0;
    let match;

    while ((match = check.regex.exec(text)) !== null) {
      findings.push({
        severity: check.severity,
        id: check.id,
        file: rel,
        line: lineNumber(text, match.index),
        value: "[redacted]"
      });

      if (match.index === check.regex.lastIndex) {
        check.regex.lastIndex++;
      }
    }
  }
}

const severityOrder = { critical: 3, high: 2, medium: 1, low: 0 };
findings.sort((a, b) =>
  severityOrder[b.severity] - severityOrder[a.severity] ||
  a.file.localeCompare(b.file) ||
  a.line - b.line
);

const report = {
  generatedAt: new Date().toISOString(),
  scannedFiles: files.length,
  findings
};

fs.writeFileSync(
  path.join(ROOT, "security-audit-report.json"),
  JSON.stringify(report, null, 2),
  "utf8"
);

if (findings.length) {
  console.error("\nSECURITY AUDIT FAILED\n");

  for (const item of findings) {
    console.error(
      `[${item.severity.toUpperCase()}] ${item.id} — ${item.file}:${item.line}`
    );
  }

  console.error(
    "\nRevise os achados antes de publicar. O conteúdo detectado não é exibido para evitar vazar o próprio segredo no log."
  );
  process.exit(1);
}

console.log(
  `Security audit OK — ${files.length} arquivos verificados e nenhum indicador sensível encontrado.`
);
