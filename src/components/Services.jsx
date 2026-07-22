const services = [
  { icon: 'fa-solid fa-laptop-code', title: 'Web Development', desc: 'Building responsive, dynamic, and user-friendly websites using modern technologies.' },
  { icon: 'fa-brands fa-web-awesome', title: 'App Development', desc: 'Creating attractive, clean and professional website layout with usability.' },
  { icon: 'fa-solid fa-school', title: 'Content Creation', desc: 'Teaching coding skills, web technologies, and development basics for beginners.' },
  { icon: 'fa-solid fa-file-lines', title: 'CV Writing', desc: 'Creating professional, clean and well-structured CVs that highlight your skills and experience effectively.' },
];

export default function Services() {
  return (
    <section className="service" id="service">
      <div className="con">
        <div className="heading">
          <h1><b>Services</b> <span className="line"></span></h1>
        </div>
        <div className="container">
          {services.map(s => (
            <div className="card" key={s.title} data-aos="zoom-in" data-aos-duration="2000">
              <div className="icon-wrap">
                <i className={s.icon}></i>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
