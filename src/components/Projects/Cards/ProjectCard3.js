import img from "../../../img/img3.jpg";
import style from "../card.module.css";

const ProjectCard3 = () => {
  return (
    <div className={style.Card}>
      <img src={img}></img>
      <h3>IoT based Home Weather Station</h3>
      <button>
        <a href="https://example.com" class="button">
          Click me
        </a>
      </button>
    </div>
  );
};

export default ProjectCard3;
