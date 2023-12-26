import Navbar from "../Home/Navbar/Navbar";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <Navbar type="footer" />
        <div className={styles.bottomText}>
          <p>© 2020 Acme. All right reserved.</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
