import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', number: '', message: '' });

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

  const check = e => {
    e.preventDefault();
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const numberRegex = /^[0-9]+$/;
    if (!form.name) return alert('Name field is required!');
    if (!nameRegex.test(form.name)) return alert('Name must contain only letters!');
    if (!form.email) return alert('Email field is required!');
    if (!emailRegex.test(form.email)) return alert('Please enter a valid email address!');
    if (!form.number) return alert('Number field is required!');
    if (!numberRegex.test(form.number)) return alert('Number must contain digits only!');
    alert('✅ All fields are valid!');
  };

  return (
    <section className="contact" id="contact">
      <div className="con">
        <div className="heading">
          <h1>Contact Me <span className="line"></span></h1>
        </div>
        <div className="contact-con">
          {[
            { icon: 'fa-solid fa-envelope', title: 'Email', info: 'hamidawol39@gmail.com', aos: 'fade-up' },
            { icon: 'fa-solid fa-phone-flip', title: 'My Phone', info: '+251912426433', aos: 'fade-down' },
            { icon: 'fa-solid fa-location-dot', title: 'My Address', info: 'Central Ethiopia, Mareko Special Woreda', aos: 'fade-up' },
          ].map((c, i) => (
            <div className="card1" key={i} data-aos={c.aos} data-aos-duration="2000">
              <div className="ico"><i className={c.icon}></i></div>
              <h3>{c.title}</h3>
              <p>{c.info}</p>
            </div>
          ))}
        </div>
        <div className="container contact-info1">
          <form data-aos="fade-up" data-aos-duration="2000" onSubmit={check}>
            <div><input type="text" name="name" placeholder="Name" value={form.name} onChange={handle} /></div>
            <div><input type="email" name="email" placeholder="Email" value={form.email} onChange={handle} /></div>
            <div><input type="text" name="number" placeholder="Number" value={form.number} onChange={handle} /></div>
            <div><textarea name="message" placeholder="Message" value={form.message} onChange={handle}></textarea></div>
            <div><button type="submit" className="btn">Send Message</button></div>
          </form>
          <div className="map" data-aos="fade-left" data-aos-duration="2000">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31606.744313871164!2d38.5121134613701!3d8.015117135588028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b361476700d30f%3A0x92aae66751bccf68!2sKoshe!5e0!3m2!1sen!2set!4v1773482075942!5m2!1sen!2set"
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
