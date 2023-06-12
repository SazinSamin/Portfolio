import style from "./button.module.css";

const MyButton = ({ link, text }) => {
  return (
    <div className={style.MyButton}>
      <a href={link} target="_blank">
        <button>{text}</button>
      </a>
    </div>
  );
};

export default MyButton;
