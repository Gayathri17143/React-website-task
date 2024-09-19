 
import "./App.css";
import Navbar from "./components/Navbar";
import FirstSection from "./components/FirstSection";
import Service from "./components/Services";
import Choose from "./components/ChooseUs";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
function App() {
  return (
    <section>
      <Navbar />
      <FirstSection />
      <Service />
      <Choose/>
      <Testimonial/>
      <Footer/>
    </section>
  );
}

export default App;
