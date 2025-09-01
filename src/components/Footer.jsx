import React from "react";
import "./footer.css";
import googleplay from "../assets/Images/Googleplay.png";
import appstore from "../assets/Images/Appstore.png";

// Add your social links here
const socials = [
  { icon: "facebook", url: "#" },
  { icon: "linkedin", url: "#" },
  { icon: "twitter", url: "#" },
  { icon: "instagram", url: "#" },
];

// SVG icons for social media
const getIcon = (name) => {
  switch(name) {
    case "facebook":
      return <svg viewBox="0 0 30 30" width={26} height={26}><circle cx="15" cy="15" r="14" fill="#fff"/><path d="M17.3 22V16h2l.3-2.3h-2.3V12.5c0-.5.1-1 .9-1h1.5V9.3c-.2 0-1.1-.1-2.1-.1-2.1 0-3.1 1.4-3.1 2.8v1.7H12V16h2v6h3.3z" fill="#2636D9"/></svg>;
    case "linkedin":
      return <svg viewBox="0 0 30 30" width={26} height={26}><circle cx="15" cy="15" r="14" fill="#fff"/><path d="M10.4 12.3h2.1v7.2h-2.1zM11.5 11.2c.7 0 1.2-.5 1.2-1.2s-.6-1.2-1.3-1.2a1.2 1.2 0 0 0 0 2.4zm2.7 1.1h2v1h.1c.3-.7 1.1-1.4 2.2-1.4 2.3 0 2.8 1.4 2.8 3.1v3.4H19v-3c0-.8-.1-1.8-1.2-1.8s-1.3.8-1.3 1.8v3h-2.1v-7z" fill="#2636D9"/></svg>;
    case "twitter":
      return <svg viewBox="0 0 30 30" width={26} height={26}><circle cx="15" cy="15" r="14" fill="#fff"/><path d="M22.7 12.3c0 .1 0 .3 0 .4 0 4-3 8.6-8.5 8.6-1.7 0-3.3-.5-4.6-1.4.2 0 .4.1.6.1 1.4 0 2.7-.5 3.8-1.4-1.3 0-2.3-.9-2.7-2.1.2 0 .3 0 .5 0 .2 0 .3 0 .5-.1-1.4-.3-2.3-1.5-2.3-2.9v-.1c.4.2.8.3 1.2.4-.8-.6-1.3-1.5-1.3-2.5 0-.6.2-1.1.5-1.5 1.7 2.1 4.2 3.4 7 3.6-.1-.2-.1-.5-.1-.7 0-1.6 1.3-2.9 2.9-2.9.9 0 1.6.4 2.2.9.7-.1 1.4-.4 2-.7-.2.7-.7 1.2-1.3 1.5.6-.1 1.2-.2 1.7-.5z" fill="#2636D9"/></svg>;
    case "instagram":
      return <svg viewBox="0 0 30 30" width={26} height={26}><circle cx="15" cy="15" r="14" fill="#fff"/><g><circle cx="15" cy="15" r="4.2" fill="none" stroke="#2636D9" strokeWidth="1.6"/><rect x="9.5" y="9.5" width="11" height="11" rx="3" ry="3" fill="none" stroke="#2636D9" strokeWidth="1.6"/><circle cx="19.6" cy="10.6" r="0.9" fill="#2636D9"/></g></svg>;
    default:
      return null;
  }
};

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="main-footer-content">
        {/* Left Section: Logo, Contact, Social */}
        <div className="footer-column col-1">
          <div className="footer-logo">
            <span className="footer-logo-icon">#</span>
            <span className="footer-logo-text"><b>strance</b>steel</span>
          </div>
          <div className="footer-address">
            AC 5, 2nd Ave, AC Block, Anna Nagar,<br />
            Chennai, Tamil Nadu 600040
          </div>
          <div className="footer-contact">
            <a href="tel:18003093099" className="footer-link">1800 309 3099</a>{" "}
            or
            <a href="mailto:support@strancesteel.com" className="footer-link">
              support@Strancesteels.com
            </a>
          </div>
          <div className="footer-socials">
            {socials.map(s => (
              <a
                key={s.icon}
                href={s.url}
                aria-label={s.icon}
                className="footer-social"
                target="_blank"
                rel="noopener noreferrer"
              >
                {getIcon(s.icon)}
              </a>
            ))}
          </div>
          <div className="footer-apps">
            <img src={googleplay} alt="Get it on Google Play" className="googleplay-img" />
            <img src={appstore} alt="Download on the App Store" className="appstore-img" />
          </div>
        </div>
        {/* Middle: Links */}
        <div className="footer-column col-2">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Enquiry</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-column col-3">
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Become a Seller</a></li>
          </ul>
        </div>
        {/* Newsletter */}
        <div className="footer-column col-4">
          <div className="footer-newsletter-title">Newsletter Sign-up</div>
          <div className="footer-newsletter-caption">Sign-up to get the latest update</div>
          <form className="footer-newsletter-form" autoComplete="off" onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder="Enter Name" />
            <input type="email" placeholder="Enter Mail" />
            <button type="submit">Keep me posted</button>
          </form>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="main-footer-bottom">
        <div>
          <span className="footer-legal-link">Legal Policies</span> / <span className="footer-legal-link">Terms &amp; Conditions</span>
        </div>
        <div>
          © 2025 Strance Steel Private Limited.
        </div>
      </div>
    </footer>
  );
}
