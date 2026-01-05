import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Bhanubathini2002" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="mailto:bbathini57@gmail.com"><EmailIcon/></a>
        <a href="tel:+16605282536"><PhoneIcon/></a>
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Bhanu Prakash Bathini</a></p>
    </footer>
  );
}

export default Footer;
