import styles from "./Card.module.css";
import giftBox from "../../../assets/giftBox.svg";

function Card({ rateData, backgroundFilled }) {
  return (
    <div
      className={styles.wrapper}
      style={backgroundFilled ? { backgroundColor: "var(--color-grey)" } : null}
    >
      <img src={giftBox} alt="gitBox" width={100} className={styles.logo} />
      <p className={styles.rate}>{rateData}% Success Rate</p>
      <p className={styles.text}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exer.
      </p>
      <button className={styles.btn}>Read More</button>
    </div>
  );
}

export default Card;
