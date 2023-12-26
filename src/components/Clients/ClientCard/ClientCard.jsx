import styles from "./ClientCard.module.css";

function ClientCard({ name, image }) {
  return (
    <div className={styles.wrapper}>
      <img src={image} alt="profile" width={100} className={styles.image} />
      <p className={styles.name}>{name}</p>
      <p className={styles.position}>Ceo of Hunt</p>
      <p className={styles.text}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua
        dolor do amet sint. Velit officia
      </p>
    </div>
  );
}

export default ClientCard;
