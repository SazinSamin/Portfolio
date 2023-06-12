import { GRETTING, NAME, REFER } from "../../constants/IntroConst";
import NameAnimationText from "../AnimatedText/NameAnimationText";
import SocialLinks from "../SocialLinks/SocialLinks";
import style from "./intro.module.css"

const Intro = () => {


  return <div className={style.Name}>
    <h3>{GRETTING}</h3>
    <h3>{REFER}</h3>
    <NameAnimationText />
    <SocialLinks />
  </div>
}

export default Intro;