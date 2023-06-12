import img from "../../../img/notepad.png"
import style from "../card.module.css";

const ProjectCard4 = () => {
  return (
    <div className={style.Card}>
      <img src={img}></img>
      <h3>NotePad</h3>
      <button>
        <a href="https://example.com" class="button">
          Click me
        </a>
      </button>
    </div>
  );
};

export default ProjectCard4;
