import "./Team.css";
import member1 from "../assets/team1.png";
import member2 from "../assets/team2.jpg";
import member3 from "../assets/team3.jpg";
import member4 from "../assets/team4.jpg";
import member5 from "../assets/team5.png";

function Team() {
  return (
    <section className="team-section">
      <p className="team-subtitle">OUR TEAM</p>
      <h2 className="team-title">Experienced Team Members</h2>

      <div className="team-grid">
        {/* Card 1 */}
        <div className="team-card">
          <img src={member1} alt="Mrs. Vaishali Chavan" />
          <h3>Mrs. Vaishali Chavan</h3>
          <span>Chairman</span>
          <p>
            Welcome to Bhadra Breeding Center, where science and innovation drive
            the future of cattle breeding and dairy farming.
          </p>
          <div className="team-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>

        {/* Card 2 */}
        <div className="team-card">
          <img src={member2} alt="Dr. Bhausaheb B. Chavan" />
          <h3>Dr. Bhausaheb B. Chavan</h3>
          <span>Founder</span>
          <p>
            As the founder, I take immense pride in our commitment to enhancing
            genetic potential using advanced reproductive technologies.
          </p>
          <div className="team-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>

        {/* Card 3 */}
        <div className="team-card">
          <img src={member3} alt="Dr. Kailas Kadam" />
          <h3>Dr. Kailas Kadam</h3>
          <span>IVF & Embryo Transfer</span>
          <p>
            Master in Veterinary Gynaecology with 8+ years of experience in
            in-vitro fertilization.
          </p>
          <div className="team-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>

        {/* Card 4 */}
        <div className="team-card">
          <img src={member4} alt="Mr. Akash Choudhari" />
          <h3>Mr. Akash Choudhari</h3>
          <span>IVF Lab Manager</span>
          <p>
            M.Sc Biotechnology, worked 6+ years and produced 5000+ IVF embryos.
          </p>
          <div className="team-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>

        {/* Card 5 */}
        <div className="team-card">
          <img src={member5} alt="Mr. Sanjay Malode" />
          <h3>Mr. Sanjay Malode</h3>
          <span>Farm Manager</span>
          <p>
            Managing a dairy farm since 2019 with 720+ animals of different
            breeds.
          </p>
          <div className="team-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;

