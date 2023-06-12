import ReactIcon from "../../SVG/react-2.svg";
import ExpresIcon from "../../SVG/express-109.svg";
import NodejsIcon from "../../SVG/nodejs.svg";
import MongoDBIcon from "../../SVG/mongodb-icon-1.svg";
import ReduxIcon from "../../SVG/redux.svg";
import HtmlIcom from "../../SVG/html-1.svg";
import CssIcon from "../../SVG/css-3.svg";
import CppIcon from "../../SVG/c-1.svg";
import CIcon from "../../SVG/c.svg";
import JavascriptIcon from "../../SVG/logo-javascript.svg";

import Style from "./skills.module.css";

const Icons = {
  Javascript: JavascriptIcon,
  Reactjs: ReactIcon,
  Exppress: ExpresIcon,
  Nodejs: NodejsIcon,
  MongoDB: MongoDBIcon,
  Redux: ReduxIcon,
  HTML: HtmlIcom,
  CSS: CssIcon,
  "C++": CppIcon,
  C: CIcon,
};

const Skill = () => {
  return (
    <section id="Skills">
      <div>
        <h1>Skills</h1>
        <div className={Style.Skills}>
          {Object.entries(Icons).map(([key, value], idx) => {
            return (
              <div key={idx}>
                <img src={value}></img>
                <p>{key}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skill;
