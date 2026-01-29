import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnicalExperience from "./components/TechnicalExperience";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <div className="bg-[#030014] min-h-screen text-white selection:bg-orange-500 selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <TechnicalExperience />
      <WorkExperience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;