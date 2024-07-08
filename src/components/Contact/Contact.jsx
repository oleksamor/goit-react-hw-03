import { useState, useEffect } from "react";
import s from "./Contact.module.css";
// import

const Contact = ({ handleDeleteContact, id }) => {
  return (
    <div className={s.contacts}>
      <ul className={s.list}>
        <li className={s.item}>Rosie Simpson</li>
        <li className={s.item}>443-89-56</li>
      </ul>

      <div>
        <button
          onClick={() => handleDeleteContact(id)}
          className="button"
          size="18px"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Contact;
