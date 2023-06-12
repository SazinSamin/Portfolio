import { ABOUT_ME } from "../../constants/IntroConst";
import AboutMeAnimation from "../AnimatedText/AboutMeAnimationText";
import style from "./aboutme.module.css";

const AboutMe = () => {
  return (
    <div className={style.AboutMe}>
      <p>
        <h1 className={style.AboutMeText}>About Me</h1>
        <AboutMeAnimation />
      </p>
    </div>
  );
};

export default AboutMe;
