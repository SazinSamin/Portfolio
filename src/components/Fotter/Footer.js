import { NAME, YEAR } from "../../constants/IntroConst";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <div className={style.Footer}>
      <footer className={style.footerText}>
        <p>&copy; {YEAR}, Design and Developed by {NAME}</p>
      </footer>
    </div>
  );
};

export default Footer;
