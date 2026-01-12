import "./TopBar.css";

function TopBar() {
  return (
    <div className="topbar">
      {/* LEFT */}
      <div className="topbar-left">
        <span className="follow-text">Follow Us :</span>

        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          className="icon"
        >
          f
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
          className="icon"
        >
          t
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="icon"
        >
          in
        </a>
        <a
          href="https://wa.me/917741035079"
          target="_blank"
          rel="noreferrer"
          className="icon"
        >
          ⓦ
        </a>
      </div>

      {/* RIGHT */}
      <div className="topbar-right">
        <span className="phone-icon">📞</span>
        <span>Call Us: +91 7741035079</span>
      </div>
    </div>
  );
}

export default TopBar;

