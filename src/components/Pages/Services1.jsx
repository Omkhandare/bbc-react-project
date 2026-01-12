import "./Services.css";

import heroBg from "../assets/services/services-hero.jpeg";
import embryoProduction from "../assets/services/embryo-production.jpg";
import embryoTransfer from "../assets/services/embryo-transfer.jpg";
import breedingProgram from "../assets/services/breeding-program.jpg";

function Services() {
  return (
    <>
      {/* ===== HERO + TITLE SECTION ===== */}
      <section
        className="services-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="services-hero-overlay">
          <h1>Services</h1>
          <p>
            Home <span>/</span> Pages <span>/</span> Services
          </p>

          {/* TITLE INSIDE HERO IMAGE (FIXED) */}
          <div className="services-hero-title">
            <span>OUR SERVICES</span>
            <h2>Services That We Offer For Your Farm</h2>
          </div>
        </div>
      </section>

      {/* ===== SERVICES CARDS ===== */}
      <section className="services-section">
        <div className="services-grid">
          {/* Card 1 */}
          <div className="services-card">
            <div className="services-image">
              <img src={embryoProduction} alt="Embryo Production" />
            </div>
            <div className="services-content">
              <h3>Embryo Production</h3>
              <p>
                Production of elite embryo of farmer donor by using desired sex
                semen of different breeds. High genetic embryo production of
                Girolando, Jersey, Holstein Friesian and Gir.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="services-card">
            <div className="services-image">
              <img src={embryoTransfer} alt="Embryo Transfer" />
            </div>
            <div className="services-content">
              <h3>Embryo Transfer</h3>
              <p>
                We provide farm door services of embryo transfer of desired breed
                to improve milk production or conservation of breed.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="services-card">
            <div className="services-image">
              <img src={breedingProgram} alt="Breeding Program" />
            </div>
            <div className="services-content">
              <h3>Breeding Program</h3>
              <p>
                We provide service at organized farms or farmer door steps to
                improve breeding programs through ART, IVF and Artificial
                Insemination.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
