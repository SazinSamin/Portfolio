import SearchBar from "../SearchBar/SearchBar";
import style from "./navbar.module.css";

const NavBar = () => {
  const scrollIntoSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if(sectionId == "Projects") {
      section.scrollIntoView({ behavior: "smooth", block:"start"});
    } else {
      section.scrollIntoView({ behavior: "smooth", block:"center"});
    }
  };

  return (
    <div className={style.Navbar}>
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
