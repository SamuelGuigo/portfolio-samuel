import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { hasLink, profile } from "../data/profile";

export default function Contact() {
  const hasEmail = Boolean(profile.email && profile.email.trim());

  return (
    <section className="section contact-section" id="contato">
      <div className="container contact-card">
        <div>
          <p className="section-label">CONTATO</p>
          <h2>Vamos falar de infraestrutura?</h2>
          <p>
            Redes, observabilidade, troubleshooting, datacenter, virtualização e
            projetos de infraestrutura.
          </p>

          <div className="location">
            <MapPin size={16} />
            {profile.location}
          </div>
        </div>

        <div className="contact-actions">
          {hasEmail && (
            <a className="btn" href={`mailto:${profile.email}`}>
              <Mail size={18} />
              E-mail
              <ArrowUpRight size={17} />
            </a>
          )}

          {hasLink(profile.linkedin) && (
            <a
              className="btn btn-ghost"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          )}

          {hasLink(profile.github) && (
            <a
              className="btn btn-ghost"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
