import styles from "./card.module.css";

const Card = ({ text, selected, ...rest }) => {
  return (
    <>
      <div
        className={`${styles.basic} ${
          selected ? styles.selectedCard : styles.card
        }`}
        {...rest}
      >
        <h3>{text}</h3>
      </div>
    </>
  );
};

export default Card;
