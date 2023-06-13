import AboutMe from "../AboutMe/AboutMe";
import Background from "../Background/Background";
import Education from "../Education/Eduction";
import Intro from "../Intro/Intro";
import NavBar from "../Navbar/Navbar";
import Skill from "../Skills/Skills";
import Tools from "../Tools/Tools";
import style from "./homePage.module.css";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect, useRef } from "react";

const HomePage = () => {

  const sectionRef = useRef(null);

  // this below code got from the chatgpt
  useEffect(() => {
    const options = {
      threshold: 0.2, // Adjust this threshold value as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          Aos.init({
            duration: 1000,
            easing: "ease-in-sine",
            delay: 10,
          });
        }
      });
    }, options);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [])



  return (
    <div className={style.HomePage}>
      <Background />
      <NavBar />
      <div className={style.Introduction}>
        <Intro />
        <AboutMe />
      </div>
      <div ref={sectionRef}  data-aos="zoom-in">
        <Skill />
      </div>
      <div data-aos="zoom-in">
        <Tools />
      </div>
      <div data-aos="zoom-in">
        <Education />
      </div>
      <div data-aos="zoom-in">
        <Projects />
      </div>
      <div data-aos="zoom-in">
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;
