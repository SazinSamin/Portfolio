import { UNIVERSITY,DEGREE, YEAR, YEAR_OF_PASSING } from "../../constants/EduConst";
import style from "./education.module.css";


const Education = () => {
  return <div className={style.Education}>
    <h1>Education</h1>
      <div>
        <h2 className={style.Univeristy}>{UNIVERSITY}</h2>
      </div>
      <div>
        <h3>{DEGREE}</h3>
      </div>
      <div>
        <h3>{YEAR_OF_PASSING}</h3>
      </div>
  </div>
}

export default Education;