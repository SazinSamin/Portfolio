import LinkedInIcon from "../../SVG/linkedin-icon.svg";
import GithubIcon from "../../SVG/github-icon-1.svg";

import style from "./socilalinks.module.css";



const SocialLinks = () => {

  return <div className={style.SocialLinks}>
    <img src={LinkedInIcon}></img>
    <img src={GithubIcon}></img>
  </div>
}

export default SocialLinks;