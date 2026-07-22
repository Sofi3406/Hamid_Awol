import hamidImg from '../assets/images/hamid.jpg';

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="con">
        <div className="container">
          <div className="home-text">
            <h1 id="name">Hi, i'm Hamid<span className="dot"></span><br />
              <span className="dot">AI Powered Web Application Developer</span>
            </h1>
            <div className="descr">
              <p>Crafting clean, modern, and user-friendly web experiences.</p>
              <p>Full-Stack development is not just my skill it's my passion.</p>
              <p>I'm Computer Science Student at Arsi University.</p>
            </div>
            <div className="button">
              <a href="#contact" className="btn1">Get in touch <i className="fa fa-arrow-right"></i></a>
              <a href="#project" className="btn2">Watch Projects</a>
            </div>
            <div className="year" data-aos="flip-down" data-aos-duration="2000">
              <div className="experience">
                <i className="fa-solid fa-laptop"></i>
                <h3>3+</h3>
                <p>Years experience</p>
              </div>
              <div className="project">
                <i className="fa-solid fa-terminal"></i>
                <h3>5+</h3>
                <p>Project</p>
              </div>
              <div className="client">
                <i className="fa-solid fa-circle-check"></i>
                <h3>2+</h3>
                <p>Happy client</p>
              </div>
            </div>
          </div>
          <div className="image" data-aos="fade-left" data-aos-duration="2000">
            <img src={hamidImg} alt="home-image" />
          </div>
        </div>
      </div>
    </section>
  );
}
