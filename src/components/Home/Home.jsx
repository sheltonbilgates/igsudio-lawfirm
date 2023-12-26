import HeroSection from "./HeroSection/HeroSection";
import Navbar from "./Navbar/Navbar";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default Home;
