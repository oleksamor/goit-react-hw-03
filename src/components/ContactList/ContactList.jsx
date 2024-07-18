import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import App from "../../App";

const ContactList = ({ contacts }) => {
  const handleDeleteContact = (id) => {
    const filteredContacts = contacts.filter((item) => item.id !== id);
    console.log(filteredContacts);
  };
  return (
    <ul className={s.list}>
      {contacts.map((item) => (
        <Contact
          key={item.id}
          {...item}
          handleDeleteContact={handleDeleteContact}
        />
        //
      ))}
    </ul>
  );
};

export default ContactList;
