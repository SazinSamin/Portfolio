import AboutMe from "../AboutMe/AboutMe";
import Background from "../Background/Background";
import Education from "../Education/Eduction";
import Intro from "../Intro/Intro";
import NavBar from "../Navbar/Navbar";
import Project from "../Project/Project";
import Skill from "../Skills/Skills";
import Tools from "../Tools/Tools";
import style from "./homePage.module.css"

const HomePage = () => {
  return (
    <div>
      <Background />
      <NavBar />
      <div className={style.Introduction}>
        <Intro />
        <AboutMe />
      </div>
      <div>
        <Skill />
      </div>
      <div>
        <Tools />
      </div>
      <div>
        <Education />
      </div>
      <div>
        <Project />
      </div>
    </div>
  );
};

export default HomePage;
