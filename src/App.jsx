import { lazy, Suspense } from "react";
import { HeroUIProvider, Spinner } from "@heroui/react";

const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Services = lazy(() => import("./components/Services"));
const Contact = lazy(() => import("./components/Contact"));
const Location = lazy(() => import("./components/Location"));
const Footer = lazy(() => import("./components/Footer"));
const WhatsAppButton = lazy(() => import("./components/WhatsAppButton"));

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Spinner size="lg" color="primary" />
    </div>
  );
}

function App() {
  return (
    <HeroUIProvider locale="es-ES">
      <div className="min-h-screen bg-white">
        <Suspense fallback={<LoadingFallback />}>
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
        </Suspense>
      </div>
    </HeroUIProvider>
  );
}

export default App;
