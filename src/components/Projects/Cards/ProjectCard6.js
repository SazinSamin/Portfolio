import img from "../../../img/autosentiment.png"
import MyButton from "../../Buttons/Button";
import style from "../card.module.css";

const ProjectCard6 = () => {
  return (
    <div className={style.Card}>
      <img src={img}></img>
      <h3>Autosentiment</h3>
      <MyButton link="https://pypi.org/project/autosentiment/" text="Link"/>
    </div>
  );
};

export default ProjectCard6;
