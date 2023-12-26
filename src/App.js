import "./App.css";
import About from "./components/About/About";
import Clients from "./components/Clients/Clients";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Newsletter from "./components/Newsletter/Newsletter";
import Practices from "./components/Practices/Practices";
import Team from "./components/Team/Team";

function App() {
  return (
    <>
      <Home />
      <About />
      <Practices />
      <Clients />
      <Team />
      <FAQ />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
