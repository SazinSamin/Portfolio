import SearchBar from "../SearchBar/SearchBar";
import style from "./navbar.module.css";

const NavBar = () => {



  return <div className={style.Navbar}>
      <SearchBar />
      <li>About me</li>
      <li>Skills</li>
      <li>Education</li>
      <li>Projects</li>
      <li>Contact</li>
  </div>
}

export default NavBar;