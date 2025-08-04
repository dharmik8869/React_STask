import React from 'react';


export default function Home() {
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>


      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">🚀 DevZone</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {['Home', 'About', 'Features', 'Contact'].map((item, index) => (
                <li className="nav-item" key={index}>
                  <a className="nav-link" href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <section className="text-white text-center py-5" style={{
        background: 'linear-gradient(120deg, #1f4037, #99f2c8)'
      }}>
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to DevZone</h1>
          <p className="lead">Modern web solutions built with React and Bootstrap</p>
          <button className="btn btn-light btn-lg mt-3">Get Started</button>
        </div>
      </section>


      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold">About Us</h2>
          <p className="mt-3 text-muted">
            We are a team of developers crafting scalable, beautiful, and fast web apps for the next-gen internet.
          </p>
        </div>
      </section>


      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Our Features</h2>
          <div className="row g-4">
            {[
              { icon: '⚡', title: 'Fast', desc: 'Blazing fast apps with React & optimization.' },
              { icon: '📱', title: 'Responsive', desc: 'Perfectly designed for all devices.' },
              { icon: '🔒', title: 'Secure', desc: 'Security is at the heart of every project.' }
            ].map((feature, i) => (
              <div className="col-md-4" key={i}>
                <div className="card h-100 text-center shadow-sm border-0 p-4 hover-shadow">
                  <div style={{ fontSize: '50px' }}>{feature.icon}</div>
                  <h5 className="mt-3 fw-bold">{feature.title}</h5>
                  <p className="text-muted">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Contact Us</h2>
          <div className="card mx-auto shadow" style={{ maxWidth: "600px", padding: "30px" }}>
            <form>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Your Name" />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Your Email" />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
        </div>
      </section>


      <footer className="bg-dark text-white text-center py-4">
        <div className="container">
          <p className="mb-0">© {new Date().getFullYear()} DevZone. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
