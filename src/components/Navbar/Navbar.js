import style from "./navbar.module.css";

const NavBar = () => {



  return <div className={style.Navbar}>
      <li>Home</li>
      <li>Skills</li>
      <li>Education</li>
      <li>Projects</li>
      <li>About me</li>
  </div>
}

export default NavBar;