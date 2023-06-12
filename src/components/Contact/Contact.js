import Footer from "../Fotter/Footer";
import ContactMeBox from "../ContactMe/ContactMeBox";
import style from "./contact.module.css";

const Contact = () => {
  return <div className={style.Contact}>
    <ContactMeBox />
    <Footer />
  </div>
}

export default Contact;