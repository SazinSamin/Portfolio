import img from "../../../img/stroke.png"
import MyButton from "../../Buttons/Button";
import style from "../card.module.css";

const ProjectCard5 = () => {
  return (
    <div className={style.Card}>
      <img src={img}></img>
      <h3>Stroke prediction using Machine learning</h3>
      <MyButton link="https://www.kaggle.com/code/sazinsamin/brain-stoke-prediction" text="Link"/>
    </div>
  );
};

export default ProjectCard5;
