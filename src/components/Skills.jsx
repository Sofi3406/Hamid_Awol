const col1 = [
  { name: 'HTML 5', pct: '98%', cls: 'pro1' },
  { name: 'CSS', pct: '90%', cls: 'pro2' },
  { name: 'Bootstrap 5', pct: '90%', cls: 'pro3' },
  { name: 'JavaScript', pct: '70%', cls: 'pro4' },
  { name: 'Node.js', pct: '50%', cls: 'pro5' },
];
const col2 = [
  { name: 'React JS', pct: '90%', cls: 'pro6' },
  { name: 'PHP', pct: '77%', cls: 'pro7' },
  { name: 'Python', pct: '90%', cls: 'pro8' },
  { name: 'MySQL', pct: '80%', cls: 'pro9' },
  { name: 'GitHub', pct: '60%', cls: 'pro10' },
];

export default function Skills() {
  return (
    <section className="skill" id="skill">
      <div className="con">
        <div className="heading">
          <h1 style={{ color: 'white' }}>Skills <span className="line"></span></h1>
        </div>
        <div className="container">
          <div className="col">
            {col1.map(s => (
              <div className="skill-box" key={s.name}>
                <div className="skill-name">
                  <h3>{s.name}</h3>
                  <div className="bar">
                    <div className="progress">
                      <div className={s.cls}></div>
                    </div>
                    <span>{s.pct}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col">
            {col2.map(s => (
              <div className="skill-box" key={s.name}>
                <div className="skill-name">
                  <h3>{s.name}</h3>
                  <div className="bar">
                    <div className="progress">
                      <div className={s.cls}></div>
                    </div>
                    <span>{s.pct}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
