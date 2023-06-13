import AboutMeAnimation from "../AnimatedText/AboutMeAnimationText";
import style from "./aboutme.module.css";

const AboutMe = () => {
  return (
    <section id="AboutMe">
      <div className={style.AboutMe}>
        <p>
          <h1 className={style.AboutMeText}>About Me</h1>
          <AboutMeAnimation />
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
