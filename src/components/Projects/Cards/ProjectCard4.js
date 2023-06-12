import img from "../../../img/notepad.png"
import MyButton from "../../Buttons/Button";
import style from "../card.module.css";

const ProjectCard4 = () => {
  return (
    <div className={style.Card}>
      <img src={img}></img>
      <h3>NotePad</h3>
      <MyButton link="https://github.com/SazinSamin/NotePad" text="Link"/>
    </div>
  );
};

export default ProjectCard4;
