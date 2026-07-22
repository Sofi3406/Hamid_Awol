export default function Footer() {
  return (
    <footer>
      <div className="con">
        <div className="container">
          <div className="cont1">
            <div className="foot-desc">
              <h3>Hamid<div className="line line2"></div></h3>
              <p>I'm a passionate Full-Stack Developer. I love creating modern, responsive, and user-friendly websites using clean code and creative design.</p>
            </div>
            <div className="quick">
              <h3>Quick Links <div className="line line2"></div></h3>
              {['home','about','skill','service','project','contact'].map(s => (
                <a key={s} href={`#${s}`}>{s.charAt(0).toUpperCase() + s.slice(1)}</a>
              ))}
            </div>
          </div>
          <div className="cont1">
            <div className="fopt-pro">
              <h3>Projects <div className="line line2"></div></h3>
              {['SMS','Koshe School','Portfolio','Central Ethiopia'].map(p => (
                <a key={p} href="#">{p}</a>
              ))}
            </div>
            <div className="foot-skill">
              <h3>Skills <div className="line2"></div></h3>
              {['HTML 5','CSS','Bootstrap 5','JavaScript','React JS','PHP'].map(s => (
                <p key={s}>{s}</p>
              ))}
            </div>
          </div>
        </div>
        <hr />
        <div className="hr">
          <p>&copy; 2026 Hamid. All rights reserved</p>
          <div className="link">
            <a href="https://t.me/Hamid_Awol" className="icon"><i className="fa-brands fa-telegram"></i></a>
            <a href="https://www.linkedin.com/in/hamid-awol-4185353a7" className="icon"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/Hamid-Awol" className="icon"><i className="fa-brands fa-github"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
