import styles from "./About.module.css";
import Card from "./Card/Card";

function About() {
  return (
    <div className={styles.wrapper} id="aboutUs">
      <div className={styles.intorWrapper}>
        <div className={styles.intortitle}>
          <h1>Let's Introduce</h1>
          <h1>Ourself</h1>
        </div>
        <div class={styles.verticalLine}></div>
        <div className={styles.intorText}>
          <h1>Criminal Lawyer</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exercitation.
          </p>
        </div>
      </div>

      <h1 className={styles.cardHeader}>Why Choose us?</h1>
      <div className={styles.card}>
        <Card rateData={98} />
        <Card rateData={100} backgroundFilled />
        <Card rateData={100} />
      </div>
    </div>
  );
}

export default About;
