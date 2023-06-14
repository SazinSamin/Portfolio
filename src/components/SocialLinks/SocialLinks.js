import LinkedInIcon from "../../SVG/linkedin-icon.svg";
import GithubIcon from "../../SVG/github-icon-1.svg";

import style from "./socilalinks.module.css";

const SocialLinks = () => {
  return (
    <div className={style.SocialLinks}>
      <a
        href="https://www.linkedin.com/in/sazin-reshed-samin-8409981ab/"
        target="_blank"
      >
        <img src={LinkedInIcon}></img>
      </a>
      <a
        href="https://github.com/SazinSamin
"
        target="_blank"
      >
        <img src={GithubIcon}></img>
      </a>
    </div>
  );
};
export default SocialLinks;
