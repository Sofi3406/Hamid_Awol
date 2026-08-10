export default function Footer() {
  return (
    <footer>
      <div className="con">
        <div className="footer-grid">

          <div className="foot-desc">
            <h3 className="foot-brand">Hamid<span className="foot-dot">.</span></h3>
            <p>Passionate Full-Stack Developer crafting modern, responsive, and user-friendly web experiences with clean code and creative design.</p>
            <a href="mailto:hamidawol39@gmail.com" className="foot-email"><i className="fa-solid fa-envelope"></i> hamidawol39@gmail.com</a>
          </div>

          <div className="quick">
            <h3>Quick Links</h3>
            <div className="foot-divider"></div>
            {['home','about','skill','service','project','contact'].map(s => (
              <a key={s} href={`#${s}`}>
                <i className="fa-solid fa-chevron-right foot-arrow"></i>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </a>
            ))}
          </div>

          <div className="fopt-pro">
            <h3>Projects</h3>
            <div className="foot-divider"></div>
            {['SMS','Koshe School','Portfolio','Central Ethiopia'].map(p => (
              <a key={p} href="#">
                <i className="fa-solid fa-chevron-right foot-arrow"></i>{p}
              </a>
            ))}
          </div>

          <div className="foot-skill">
            <h3>Skills</h3>
            <div className="foot-divider"></div>
            <div className="skill-tags">
              {['HTML5','CSS3','Bootstrap','JavaScript','React JS','PHP'].map(s => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>
          </div>

        </div>

        <div className="foot-bottom">
          <p>&copy; 2026 <span className="foot-name">Hamid</span>. All rights reserved.</p>
          <div className="foot-socials">
            <a href="https://t.me/Hamid_Awol" aria-label="Telegram"><i className="fa-brands fa-telegram"></i></a>
            <a href="https://www.linkedin.com/in/hamid-awol-4185353a7" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/Hamid-Awol" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
