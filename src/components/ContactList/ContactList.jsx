import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.list}>
      {contacts.map((item) => (
        <Contact key={item.id} {...item} onDeleteContact={onDeleteContact} />
        //
      ))}
    </ul>
  );
};

export default ContactList;
