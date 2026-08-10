import hamid2 from '../assets/images/hamid.jpg';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="con">
        <div className="heading">
          <h1><b>About Me</b> <span className="line"></span></h1>
        </div>
        <div className="container">
          <div className="image" data-aos="fade-right" data-aos-duration="2000">
            <img src={hamid2} alt="about" />
          </div>
          <div className="about-text">
            <h2><b>Full Stack Developer</b></h2>
            <div className="des">
              <p>I'm Hamid Awol, a passionate Full-Stack Developer. I love creating modern, responsive, and user-friendly websites using clean code and creative design.</p>
            </div>
            <div className="about-info" data-aos="fade-left" data-aos-duration="2000">
              <div>
                <p><span className="dot"><b>Age:</b></span> 26</p>
                <p><span className="dot"><b>Gender:</b></span> Male</p>
                <p><span className="dot"><b>Language:</b></span> English, Amharic</p>
                <p><span className="dot"><b>Email:</b></span> hamidawol39@gmail.com</p>
              </div>
              <div>
                <p><span className="dot"><b>Work:</b></span> Full-Stack Developer</p>
                <p><span className="dot"><b>Freelance:</b></span> Available</p>
                <p><span className="dot"><b>Phone:</b></span> 0921426433</p>
                <p><span className="dot"><b>Country:</b></span> Ethiopia</p>
              </div>
            </div>
            <div className="link" data-aos="fade-left" data-aos-duration="2000">
              <a href="https://t.me/Hamid_Awol" className="icon"><i className="fa-brands fa-telegram"></i></a>
              <a href="https://www.linkedin.com/in/hamid-awol-4185353a7" className="icon"><i className="fa-brands fa-linkedin"></i></a>
              <a href="https://github.com/Hamid-Awol" className="icon"><i className="fa-brands fa-github"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
