import img from "../../../img/prosthetic.png";
import style from "./../card.module.css";
import MyButton from "../../Buttons/Button";

const ProjectCard2 = () => {
  return (
    <div className={style.Card}>
      <img src={img}></img>
      <h3>Smart Health Monitoring System</h3>
      <MyButton link="https://github.com/SazinSamin/sazinsamin.github.io/tree/master/prosthetic" text="Link"/>
    </div>
  );
};

export default ProjectCard2;
