import { GRETTING, NAME, SURNAME } from "../../constants/IntroConst";
import SocialLinks from "../SocialLinks/SocialLinks";
import style from "./intro.module.css"

const Intro = () => {


  return <div className={style.Name}>
    <h3>{GRETTING}</h3>
    <h1>{NAME}</h1>
    <SocialLinks />
  </div>
}

export default Intro;