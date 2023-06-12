import AboutMe from "../AboutMe/AboutMe";
import Background from "../Background/Background";
import Education from "../Education/Eduction";
import Intro from "../Intro/Intro";
import NavBar from "../Navbar/Navbar";
import Skill from "../Skills/Skills";
import Tools from "../Tools/Tools";
import style from "./homePage.module.css"
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";


const HomePage = () => {
  return (
    <div className={style.HomePage}>
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
        <Projects />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;
