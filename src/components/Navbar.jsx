import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Especialidades", "#especialidades"],
  ["Projetos", "#projetos"],
  ["Experiência", "#experiencia"],
  ["Stack", "#stack"],
  ["Sobre", "#sobre"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-shell">
      <nav className="nav container">
        <a className="brand" href="#top" aria-label="Início">
          SG<span>.</span>
        </a>

        <div className="nav-links desktop">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
          <a className="btn btn-small" href="#contato">
            Contato
          </a>
        </div>

        <button
          className="mobile-menu-button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="mobile-menu">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href="#contato" onClick={() => setOpen(false)}>
            Contato
          </a>
        </div>
      )}
    </header>
  );
}