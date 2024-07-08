import "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = () => {
  return (
    <div>
      <Contact key={item.id} {...item} />
    </div>
  );
};

export default ContactList;
