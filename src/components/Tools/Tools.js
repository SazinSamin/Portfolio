import GitIcon from "../../SVG/Tools/git-icon.svg";
import LinuxIcon from "../../SVG/Tools/linux-tux-3.svg";
import VSCodeIcon from "../../SVG/Tools/visual-studio-code-1.svg";
import NetlifyIcon from "../../SVG/Tools/netlify.svg";
import ArduinoIcon from "../../SVG/Tools/arduino-1.svg";

import Style from "./tools.module.css";


const Icons = {
  "Git" : GitIcon,
  "Linux" : LinuxIcon,
  "Vs Code" : VSCodeIcon,
  "Netlify" : NetlifyIcon,
  "Arduino" : ArduinoIcon,
}



const Tools = () => {
  return (
    <div>
      <h1>Tools & Technology</h1>
      <div className={Style.Tools}>
        {Object.entries(Icons).map(([key, value], idx) => {
          return <div key={idx}>
            <img src={value}></img>
            <p>{key}</p>
          </div>
        })}
      </div>
    </div>
  );
};

export default Tools;
