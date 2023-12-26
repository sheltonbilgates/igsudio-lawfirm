import logo from "../../../../assets/logo.svg";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.wrapper}>
      <img src={logo} alt="firmLogo" width={32} />
      <h4>IGSTUDIO</h4>
    </div>
  );
}

export default Logo;
