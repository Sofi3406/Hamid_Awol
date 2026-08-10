import youtube from '../assets/images/youtube.jpg';
import netflix from '../assets/images/netflix.jpg';
import gptClone from '../assets/images/gpt clone.jpg';
import aiEvangadi from '../assets/images/ai powered evangadi forum.jpg';

const projects = [
  {
    img: netflix,
    title: 'NetMovie Gallery',
    desc: 'A Netflix-inspired movie gallery app for browsing and discovering movies.',
    tech: ['React JS', 'Node.js', 'MySQL'],
    live: 'https://net-movie-gallery.vercel.app/',
    github: 'https://github.com/Hamid-Awol/NetMovie-gallery',
  },
  {
    img: gptClone,
    title: 'GPT Clone Project',
    desc: 'A ChatGPT-inspired AI chat interface clone.',
    tech: ['React JS', 'Node.js', 'MySQL'],
    live: 'https://gpt-clone-project-psi.vercel.app/',
    github: 'https://github.com/Hamid-Awol/gpt-clone-project',
  },
  {
    img: aiEvangadi,
    title: 'Evangadi Forum AI Powered',
    desc: 'An AI-powered Q&A forum platform built on the Evangadi community concept.',
    tech: ['React JS', 'Node.js', 'MySQL'],
    live: 'https://evangadi-forum-ai-powered.vercel.app/',
    github: 'https://github.com/Hamid-Awol/Evangadi-forum-Ai-powered',
  },
  {
    img: youtube,
    title: 'YouTube Clone',
    desc: 'A YouTube homepage clone built with HTML, CSS, Bootstrap, and JavaScript.',
    tech: ['HTML', 'CSS', 'Bootstrap'],
    live: 'https://your-demo-link.vercel.app/',
    github: 'https://github.com/Hamid-Awol/youtube-html-css-clone',
  },
];

function ProCard({ p }) {
  return (
    <div className="pro-card" data-aos="fade-up" data-aos-duration="800">
      <div className="pro-img-wrap">
        <img className="pro-img" src={p.img} alt={p.title} />
        <div className="pro-overlay">
          <div className="pro-overlay-links">
            <a href={p.github} target="_blank" rel="noreferrer" className="pro-btn">
              <i className="fa-brands fa-github"></i> GitHub
            </a>
            {p.live && p.live !== '#' && (
              <a href={p.live} target="_blank" rel="noreferrer" className="pro-btn pro-btn-live">
                <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="pro-info">
        <h3>{p.title}</h3>
        <p>{p.desc}</p>
        <div className="pro-tags">
          {p.tech.map((t, i) => <span key={i} className="pro-tag">{t}</span>)}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="project1" id="project">
      <div className="con">
        <div className="heading proj">
          <h1><b>Projects</b> <span className="line"></span></h1>
        </div>
        <div className="pro-grid">
          {projects.map((p, i) => <ProCard key={i} p={p} />)}
        </div>
      </div>
    </section>
  );
}
