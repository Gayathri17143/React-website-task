 
import "./App.css";
import Navbar from "./components/Navbar";
import FirstSection from "./components/FirstSection";
import Service from "./components/Services";
import Choose from "./components/ChooseUs";
import Footer from "./components/Footer";
function App() {
  return (
    <section>
      <Navbar />
      <FirstSection />
      <Service />
      <Choose/>
      <Footer/>
    </section>
  );
}

export default App;
