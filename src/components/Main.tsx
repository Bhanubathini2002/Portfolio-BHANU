import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profi from "../assets/images/profilephoto.png";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profi} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/bathini-bhanu-prakash-1106151b5/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:bbathini57@gmail.com"><EmailIcon/></a>
            <a href="tel:+16605282536"><PhoneIcon/></a>
          </div>
          <h1>Bhanu Prakash</h1>
          <p>Full Stack AI Engineer</p>
          <div className="mobile_social_icons">
            <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:bbathini57@gmail.com"><EmailIcon/></a>
            <a href="tel:+16605282536"><PhoneIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
