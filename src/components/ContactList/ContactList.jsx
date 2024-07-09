import "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = (contacts) => {
  return (
    <div>
      <Contact key={contacts.id} {...contacts} />
    </div>
  );
};

export default ContactList;
