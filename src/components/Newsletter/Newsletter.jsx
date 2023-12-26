import styles from "./Newsletter.module.css";

function Newsletter() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <h1 className={styles.heading}>Subscribe Our Newsletter</h1>
        <div className={styles.content}>
          <input type="text" placeholder="Name:" className={styles.nameInput} />
          <input
            type="text"
            placeholder="Enter your Email"
            className={styles.emailInput}
          />
          <button className={styles.btn}>SEND</button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
