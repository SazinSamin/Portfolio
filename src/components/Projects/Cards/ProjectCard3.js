import img from "../../../img/img3.jpg";
import style from "../card.module.css";
import MyButton from "../../Buttons/Button";

const ProjectCard3 = () => {
  return (
    <div className={style.Card}>
      <img src={img}></img>
      <h3>IoT based Home Weather Station</h3>
      <MyButton link="https://github.com/SazinSamin/Home_Weather_Station" text="Link"/>
    </div>
  );
};

export default ProjectCard3;
