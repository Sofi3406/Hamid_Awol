import { useState } from 'react';
import profileImg from '../assets/images/hamid.jpg';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="con">
        <div className="container1">
          <div className="logo">
            <img src={profileImg} alt="Hamid" className="nav-profile-img" />
            <span>Hamid<span className="dot">.</span></span>
          </div>

          <div className="menu" onClick={() => setOpen(true)}>
            <i className="fa-solid fa-bars"></i>
          </div>

          <div className="nav" style={{ right: open ? '0' : '-100%' }}>
            <div className="times" onClick={() => setOpen(false)}>
              <i className="fa-solid fa-xmark"></i>
            </div>
            <div>
              {['home','about','skill','service','project','contact'].map(s => (
                <a key={s} href={`#${s}`} onClick={() => setOpen(false)}>
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
