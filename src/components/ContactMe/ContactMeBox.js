import MyButton from "../Buttons/Button";
import style from "./contactMeBox.module.css";
import { Button } from "react-bootstrap";

const ContactMeBox = () => {

  return <div className={style.ContactMeBox}>
    <h2>Contact me</h2>
    <div>
      <label>Name: </label>
      <input placeholder="Put your name plase"></input>
    </div>
    <div>
      <label>Email: </label>
      <input placeholder="Put your email plase"></input>
    </div>
    <div>
      <label>Text: </label>
      <input className={style.Text} placeholder="Put your Text plase"></input>
    </div>
    <MyButton link="" text="Submit"/>
  </div>
}

export default ContactMeBox;