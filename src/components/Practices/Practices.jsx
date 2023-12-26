import styles from "./Practices.module.css";

function Practices() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Area of Practices</h1>
      <div className={styles.flexContainer}>
        <h3 className={styles.item1}>BUSINESS LAW</h3>
        <h3 className={styles.item2}>PARTNERSHIP LAW</h3>
        <h3 className={styles.item3}>REAL ESTATE LAW</h3>
        <h3 className={styles.item4}>BUSINESS LAW</h3>
        <h3 className={styles.item5}>LANDLORD DISPUTES</h3>
        <h3 className={styles.item6}>ELDER ABUSE</h3>
      </div>
    </div>
  );
}

export default Practices;
