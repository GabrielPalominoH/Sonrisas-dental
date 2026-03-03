import { HeroUIProvider } from "@heroui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Location from "./components/Location";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <HeroUIProvider locale="es-ES" >
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Contact />
          <Location />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </HeroUIProvider>
  );
}

export default App;
