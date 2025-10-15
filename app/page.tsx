
import { About } from "./components/ui/About";
import { Contact } from "./components/ui/Contact";
import { Footer } from "./components/ui/Footer";
import { Hero } from "./components/ui/Hero";
import { Navigation } from "./components/ui/Navigation";
import { Portfolio } from "./components/ui/Portfolio";
import { Resume } from "./components/ui/Resume";
import { Services } from "./components/ui/Services";
import { Toaster } from "./components/ui/sonner";
import "../styles/animations.css";
import { Blog } from "./components/ui/Blog";

export default function App() {
  return (
    <div className="size-full min-h-screen transition-colors duration-300">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
