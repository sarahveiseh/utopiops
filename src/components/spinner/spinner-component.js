import styles from "./spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.spinner__container}>
      <div className={styles.spinner} />
    </div>
  );
};

export default Spinner;
