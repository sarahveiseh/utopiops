import styles from "./notify.module.css";

const Notify = ({ text, action, color }) => {
  return (
    <>
      <div className={` ${styles.container} ${styles[color]}`}>
        <p className={styles.message}>{text}</p>
        <button className={styles.button} onClick={action}>
          CONFIRM
        </button>
      </div>
    </>
  );
};

export default Notify;
