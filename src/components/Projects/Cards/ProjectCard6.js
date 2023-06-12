import img from "../../../img/autosentiment.png"
import style from "../card.module.css";

const ProjectCard6 = () => {
  return (
    <div className={style.Card}>
      <img src={img}></img>
      <h3>Autosentiment</h3>
      <button>
        <a href="https://example.com" class="button">
          Click me
        </a>
      </button>
    </div>
  );
};

export default ProjectCard6;
