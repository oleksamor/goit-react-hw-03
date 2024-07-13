import s from "./Contact.module.css";

const Contact = ({ name, number, id, onDeleteContact }) => {
  return (
    <li className={s.wrapper}>
      <div className={s.userWrapper}>
        <p className={s.text}>
          <span className={s.span}></span>
          {name}
        </p>
        <p className={s.text}>
          <span className={s.span}></span>
          {number}
        </p>
      </div>
      <button onClick={() => onDeleteContact(id)} className={s.button}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
