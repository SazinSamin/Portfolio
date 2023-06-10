import { UNIVERSITY,DEGREE, YEAR } from "../../constants/EduConst";

const Education = () => {
  return <div>
    <h1>Education</h1>
      <div>
        <h2>{UNIVERSITY}</h2>
      </div>
      <div>
        <h3>{DEGREE}</h3>
      </div>
      <div>
        <h3>{YEAR}</h3>
      </div>
  </div>
}

export default Education;