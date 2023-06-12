import img from "../../../img/prosthetic.png";
import style from "./../card.module.css";

const ProjectCard2 = () => {
  return (
    <div className={style.Card}>
      <img src={img}></img>
      <h3>Smart Health Monitoring System</h3>
      <button>
        <a href="https://example.com" class="button">
          Click me
        </a>
      </button>
    </div>
  );
};

export default ProjectCard2;
