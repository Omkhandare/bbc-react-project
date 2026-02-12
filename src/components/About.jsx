import React from "react";
import "./About.css";

// ✅ HEADER IMAGE
import aboutHeaderBg from "../assets/about/header.jpg";

// ✅ ABOUT SECTION IMAGES
import aboutImage1 from "../assets/about/hero3.jpg";
import aboutImage2 from "../assets/about/hero4.jpeg";

// ✅ FEATURE ICON IMAGES
import ivfIcon from "../assets/about/icon-ivf.png";
import farmingIcon from "../assets/about/icon-farming.png";

// ✅ TEAM MEMBER IMAGES
import team1 from "../assets/team/team1.jpg";
import team2 from "../assets/team/team2.jpg";
import team3 from "../assets/team/team3.jpg";
import team4 from "../assets/team/team4.jpg";
import team5 from "../assets/team/team5.jpg";

function About({ showHero = true, showTeam = true }) {
  return (
    <>
      {/* ✅ HEADER BANNER (HIDE ON HOME) */}
      {showHero && (
        <div
          className="about-page-header"
          style={{ backgroundImage: `url(${aboutHeaderBg})` }}
        >
          <div className="about-page-header-overlay">
            <h2>About Us</h2>
            <p>
              Home <span>/</span> Pages <span>/</span> About Us
            </p>
          </div>
        </div>
      )}

      {/* ✅ ABOUT SECTION */}
      <section className="about-section">
        <div className="about-container">
          {/* LEFT SIDE CONTENT */}
          <div className="about-left">
            <div className="about-title-row">
              <span className="about-tag">ABOUT US</span>
              <span className="about-line"></span>
            </div>

            <h2 className="about-heading">
              Know About Our IVF Center for Cows & <br /> Our Mission
            </h2>

            {/* ✅ IMAGE BOX SAME AS SCREENSHOT */}
            <div className="about-images-wrapper">
              <div className="about-exp-box">
                <h1>5</h1>
                <p>Years Experience</p>
              </div>

              <div className="about-img-top">
                <img src={aboutImage1} alt="about-top" />
              </div>

              <div className="about-img-bottom">
                <img src={aboutImage2} alt="about-bottom" />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="about-right">
            <p className="about-para">
              Welcome to Bhadra Breeding Center, where science and innovation
              drive the future of cattle breeding and dairy farming. At Bhadra
              Breeding Center, we specialize in the production of elite embryos
              from high-genetic breeds using desired sexed semen of Girolando,
              Jersey, Holstein Friesian, and Gir (Indigenous Gir, 50% Brazilian
              Gir, 75% Brazilian Gir). We provide farm-door embryo transfer
              services to help farmers improve their herd&apos;s productivity or
              preserve indigenous breeds.
            </p>

            <div className="about-feature-grid">
              {/* ✅ FEATURE 1 */}
              <div className="about-feature">
                <div className="about-icon">
                  <img src={ivfIcon} alt="Advanced IVF Services Icon" />
                </div>

                <div className="about-feature-text">
                  <h3>Advanced IVF Services</h3>
                  <p>
                    With the most advanced IVF and embryo transfer technologies
                    in India, we achieve the highest success rates in cattle
                    breeding. Our team of experts in In-Vitro Fertilization
                    (IVF), Embryo Transfer (ET), and Artificial Insemination
                    (AI) is dedicated to bringing world-class breeding solutions
                    to farmers&apos; doorsteps.
                  </p>
                </div>
              </div>

              {/* ✅ FEATURE 2 */}
              <div className="about-feature">
                <div className="about-icon">
                  <img src={farmingIcon} alt="Sustainable Farming Icon" />
                </div>

                <div className="about-feature-text">
                  <h3>Sustainable Farming Practices</h3>
                  <p>
                    We believe that every farmer deserves access to superior
                    breeding services, and we are committed to making that
                    possible. Whether you aim to enhance milk production,
                    conserve indigenous breeds, or optimize your farm&apos;s
                    breeding program, Bhadra Breeding Center is here to guide
                    you toward a prosperous and sustainable future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ CENTER TEXT LINE */}
        <p className="about-bottom-text">
          Join us in revolutionizing cattle breeding and shaping the next era of
          high-yield, sustainable dairy farming.
        </p>
      </section>

      {/* ✅ OUR TEAM SECTION (HIDE ON HOME) */}
      {showTeam && (
        <section className="team-section">
          <div className="team-container">
            <div className="team-title-row">
              <span className="team-line"></span>
              <span className="team-tag">OUR TEAM</span>
              <span className="team-line"></span>
            </div>

            <h2 className="team-heading">Experienced Team Members</h2>

            <div className="team-grid-new">
              {/* ✅ CARD 1 */}
              <div className="team-card-new">
                <div className="team-img-new">
                  <img src={team1} alt="Mrs. Vaishali Chavan" />
                </div>
                <h3 className="team-name-new">Mrs. Vaishali Chavan</h3>
                <p className="team-role-new">Chairman</p>
                <p className="team-desc-new">
                  Welcome to Bhadra Breeding Center, where science and innovation
                  drive the future of cattle breeding and dairy farming. At Bhadra
                  Breeding Center, we specialize in the production of elite embryos
                  from high-genetic breeds using desired sexed semen of Girolando,
                  Jersey, Holstein Friesian, and Gir (Indigenous Gir, 50% Brazilian
                  Gir, 75% Brazilian Gir).
                </p>

                <div className="team-social-new">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              {/* ✅ CARD 2 */}
              <div className="team-card-new">
                <div className="team-img-new">
                  <img src={team2} alt="Dr. Bhausahheb B. Chavan" />
                </div>
                <h3 className="team-name-new">Dr. Bhausahheb B. Chavan</h3>
                <p className="team-role-new">Founder</p>
                <p className="team-desc-new">
                  As the founder, I take immense pride in our commitment to
                  enhancing genetic potential, improving milk production, and
                  conserving valuable breeds through advanced reproductive
                  technologies.
                </p>

                <div className="team-social-new">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              {/* ✅ CARD 3 */}
              <div className="team-card-new">
                <div className="team-img-new">
                  <img src={team3} alt="Dr. Kailas Kadam" />
                </div>
                <h3 className="team-name-new">Dr. Kailas Kadam</h3>
                <p className="team-role-new">
                  IVF & Embryo Transfer (ET) Specialist Consultant
                </p>
                <p className="team-desc-new">
                  Master in Veterinary Gynecology and obstetrics (M.V.Sc) with
                  8 years experience in IVF and embryo transfer (ET) in multiple breeds.
                </p>

                <div className="team-social-new">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              {/* ✅ CARD 4 */}
              <div className="team-card-new">
                <div className="team-img-new">
                  <img src={team4} alt="Mr. Akash Choudhari" />
                </div>
                <h3 className="team-name-new">Mr. Akash Choudhari</h3>
                <p className="team-role-new">IVF Lab Manager</p>
                <p className="team-desc-new">
                  M.Sc Biotechnology, working as a bovine embryologist for 6 years
                  and produced 5000+ IVF embryos of multiple breeds.
                </p>

                <div className="team-social-new">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              {/* ✅ CARD 5 */}
              <div className="team-card-new">
                <div className="team-img-new">
                  <img src={team5} alt="Mr. Sanjay Malode" />
                </div>
                <h3 className="team-name-new">Mr. Sanjay Malode</h3>
                <p className="team-role-new">Farm Manager</p>
                <p className="team-desc-new">
                  Managing 720 animals of different breeds and working towards
                  improving lactation yield and herd quality.
                </p>

                <div className="team-social-new">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default About;
