import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import App from "../../App";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={s.list}>
      {contacts.map((item) => (
        <Contact key={item.id} {...item} handleDeleteContact={deleteContact} />
        //
      ))}
    </ul>
  );
};

export default ContactList;
