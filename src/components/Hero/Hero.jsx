import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-tag">🚀 Trusted by 1000+ Students</span>

          <h1>
            Learn Today,
            <br />
            <span>Lead Tomorrow</span>
          </h1>

          <p>
            Master Mathematics, Coding, MERN Stack, Web Development, and
            Industry Skills through structured courses designed to help you
            achieve real-world success.
          </p>

          <div className="hero-buttons">
            <button className="explore-btn">Explore Courses</button>

            <button className="demo-btn">Watch Demo</button>
          </div>

          <div className="hero-stats">
            <div className="stat-box">
              <h2>1000+</h2>
              <p>Students</p>
            </div>

            <div className="stat-box">
              <h2>25+</h2>
              <p>Courses</p>
            </div>

            <div className="stat-box">
              <h2>4.9★</h2>
              <p>Rating</p>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200"
            alt="Students Learning"
          />

          <div className="floating-card">⭐ Rated 4.9 by Students</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
