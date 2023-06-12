import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./navbar.module.css";
import { useEffect } from "react";

const NavBar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])




  const scrollIntoSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if(sectionId == "Projects") {
      section.scrollIntoView({ behavior: "smooth", block:"start"});
    } else {
      section.scrollIntoView({ behavior: "smooth", block:"center"});
    }
  };

  return (
    <div className={!isScrolled ? style.Navbar : style.NavbarScrolled}>
      <SearchBar />
      <li id="AboutMeNavElement"
        onClick={() => {
          scrollIntoSection("AboutMe");
        }}
      >
        About me
      </li>
      <li
        onClick={() => {
          scrollIntoSection("Skills");
        }}
      >
        Skills
      </li>
      <li
        onClick={() => {
          scrollIntoSection("Education");
        }}
      >
        Education
      </li>
      <li
        onClick={() => {
          scrollIntoSection("Projects");
        }}
      >
        Projects
      </li>
      <li
        onClick={() => {
          scrollIntoSection("Contact");
        }}
      >
        Contact
      </li>
    </div>
  );
};

export default NavBar;
