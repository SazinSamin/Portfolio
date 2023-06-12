import img from "../../../img/stroke.png"
import style from "../card.module.css";

const ProjectCard5 = () => {
  return (
    <div className={style.Card}>
      <img src={img}></img>
      <h3>Stroke prediction using Machine learning</h3>
      <button>
        <a href="https://example.com" class="button">
          Click me
        </a>
      </button>
    </div>
  );
};

export default ProjectCard5;
