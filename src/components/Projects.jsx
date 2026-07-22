import apple from '../assets/images/apple.jpg';
import youtube from '../assets/images/youtube.jpg';
import housePrice from '../assets/images/house price.jpg';
import evangadi from '../assets/images/evangadi.jpg';
import billing from '../assets/images/billing.jpg';
import menuImg from '../assets/images/menu.png';

const row1 = [
  {
    img: apple,
    title: 'Apple Website Clone',
    desc: 'A responsive Apple website clone built using HTML, CSS, Bootstrap, and JavaScript. Replicates the modern layout and design style of the official Apple homepage.',
    tech: 'HTML, CSS, Bootstrap, JavaScript',
    live: '#',
    github: 'https://github.com/Hamid-Awol/AppleClone',
  },
  {
    img: youtube,
    title: 'YouTube Clone',
    desc: 'A YouTube homepage clone built with HTML, CSS, Bootstrap, and JavaScript.',
    tech: 'HTML, CSS, Bootstrap, JavaScript',
    live: '#',
    github: 'https://github.com/Hamid-Awol/youtube-html-css-clone',
  },
  {
    img: housePrice,
    title: 'House Price Prediction App',
    desc: 'A machine learning web app that predicts house prices based on input features.',
    tech: 'Python',
    live: '#',
    github: 'https://github.com/Hamid-Awol/House-price-predictor-app',
  },
];

const row2 = [
  {
    img: evangadi,
    title: 'Evangadi Menu React App',
    desc: 'A React-based menu application built as part of front-end development practice.',
    tech: 'React, CSS',
    live: '#',
    github: 'https://github.com/Hamid-Awol/evangadi-menu-react-app',
  },
  {
    img: menuImg,
    title: 'Menu React App',
    desc: 'A menu application built with React Vite.',
    tech: 'React Vite',
    live: '#',
    github: 'https://github.com/Hamid-Awol/evangadi-menu-react-app',
  },
  {
    img: billing,
    title: 'Billing Cafe System',
    desc: 'A cafe billing system for managing orders and generating bills.',
    tech: 'PHP, MySQL',
    live: '#',
    github: 'https://github.com/Hamid-Awol/Billing_Cafe_System',
  },
];

function ProCard({ p }) {
  return (
    <div className="pro-card" data-aos="flip-down" data-aos-duration="2000">
      <img className="pro-img" src={p.img} alt={p.title} />
      <div className="pro-link">
        <h3>{p.title}</h3>
        <p><span className="tech">{p.tech}</span></p>
        <div className="links">
          <a href={p.github} target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
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
        <div className="container">
          {row1.map((p, i) => <ProCard key={i} p={p} />)}
        </div>
        <div className="container">
          {row2.map((p, i) => <ProCard key={i} p={p} />)}
        </div>
      </div>
    </section>
  );
}
