import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import About from "./components/About";
import Process from "./components/Process";
import Technology from "./components/Technology";
import Insights from "./components/Insights";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PageIntro from "./components/PageIntro";
import CustomCursor from "./components/CustomCursor";
import MagneticButton from "./components/MagneticButton";

function App() {
  useEffect(() => {
    document.title = "CortexNova — We Build Technology That Moves Ahead";
  }, []);

  return (
    <>
      {/* Plays once on load, then reveals the site */}
      <PageIntro />

      {/* Custom cursor, active site-wide on desktop */}
      <CustomCursor />

      <MagneticButton />

      <main className="min-h-screen overflow-hidden bg-cortex-black text-cortex-white">
        <Navbar />

        <Hero />

        <Services />

        <Work />

        <About />

        <Process />

        <Technology />

        <Insights />

        <Contact />

        <Footer />
      </main>
    </>
  );
}

export default App;
