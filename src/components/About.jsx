
import './About.css';
import aboutImage1 from '../assets/about/hero3.jpg'; 
import aboutImage2 from '../assets/about/hero4.jpeg'; 

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-header">
          <span className="about-badge">ABOUT US</span>
          <h1>Know About Our IVF Center for Cows & Our Mission</h1>
          
          <div className="experience-container">
            <div className="experience-number">
              <div className="number-circle">5</div>
            </div>
            <div className="experience-text">
              <span className="years-text">Years Experience</span>
            </div>
          </div>
        </div>

        <div className="about-content">
          <div className="about-image-section">
            <div className="image-container main-image">
              <img src={aboutImage1} alt="Bhadra Breeding Center Facility" className="about-main-image" />
            </div>
            
            {}
            <div className="second-image-container">
              <img src={aboutImage2} alt="Our Veterinary Team" className="about-second-image" />
            </div>
          </div>
          
          <div className="about-text-section">
            <div className="about-main">
              <p>
                Welcome to Bhadra Breeding Center, where science and innovation drive the future of cattle breeding and dairy farming. At Bhadra Breeding Center, we specialize in the production of elite embryos from high genetic breeds using desired sexed semen of Girolando, Jersey, Holstein Friesian, and Gir (Indigenous Gir, 50% Brazilian Gir, 75% Brazilian Gir). We provide farm-door embryo transfer services to help farmers improve their herd's productivity or preserve indigenous breeds.
              </p>
            </div>

            <div className="about-features">
              <div className="feature">
                <h3>Advanced IVF Services</h3>
                <p>
                  With the most advanced IVF and embryo transfer technologies in India, we achieve the highest success rates in cattle breeding. Our team of experts in In-Vitro Fertilization (IVF), Embryo Transfer (ET), and Artificial Insemination (AI) is dedicated to bringing world-class breeding solutions to farmers' doorsteps.
                </p>
              </div>

              <div className="feature">
                <h3>Sustainable Farming Practices</h3>
                <p>
                  We believe that every farmer deserves access to superior breeding services, and we are committed to making that possible. Whether you aim to enhance milk production, conserve indigenous breeds, or optimize your farm's breeding program, Bhadra Breeding Center is here to guide you toward a prosperous and sustainable future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;