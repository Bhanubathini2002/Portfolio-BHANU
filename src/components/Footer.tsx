import React from "react";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-row">
        <span>© {new Date().getFullYear()} Bhanu Prakash Bathini</span>
        <span>
          Built on{" "}
          <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">
            react-portfolio-template
          </a>{" "}
          by Yuji Sato
        </span>
      </div>
    </footer>
  );
}

export default Footer;
