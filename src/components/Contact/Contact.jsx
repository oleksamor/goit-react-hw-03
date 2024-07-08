import { useState, useEffect } from "react";
import s from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={s.contacts}>
      <ul className={s.list}>
        <li className={s.item}>Rosie Simpson</li>
        <li className={s.item}>443-89-56</li>
      </ul>

      <div>
        <button type="button">Delete</button>
      </div>
    </div>
  );
};
export default Contact;
