import s from "./Contact.module.css";

const Contact = ({ name, number, id, deleteContact }) => {
  return (
    <div className={s.wrapper}>
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
      <button onClick={() => deleteContact(id)} className={s.button}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
