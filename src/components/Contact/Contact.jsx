import { useState, useEffect } from "react";
import s from "./Contact.module.css";
// import

const Contact = ({ handleDeleteContact, id }) => {
  return (
    <li>
      <span className={s.item}>Rosie Simpson</span>
      <br />
      <span className={s.item}>443-89-56</span>
      <button onClick={handleDeleteContact(id)} className="button" size="18px">
        Delete
      </button>
    </li>
  );
};

export default Contact;
