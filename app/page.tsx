
'use client'
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
import { ChatBot } from "./components/chatbot";
import { useState } from "react";
import { motion,AnimatePresence } from "motion/react";
import { Welcome } from "./components/welcome";

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);

  const handleEnter = () => {
    setHasEntered(true);
  };
  return (
   



<div className="size-full min-h-screen transition-colors duration-300">
<AnimatePresence mode="wait">
  {!hasEntered ? (
    <motion.div
      key="welcome"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Welcome onEnter={handleEnter} />
    </motion.div>
  ) : (
    <motion.div
      key="portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
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
      <ChatBot />
    </motion.div>
  )}
</AnimatePresence>
<Toaster />
</div>
  );
}


