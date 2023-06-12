import Footer from "../Fotter/Footer";
import ContactMeBox from "../ContactMe/ContactMeBox";
import style from "./contact.module.css";

const Contact = () => {
  return (
    <section id="Contact">
      <div className={style.Contact}>
        <ContactMeBox />
        <Footer />
      </div>
    </section>
  );
};

export default Contact;
