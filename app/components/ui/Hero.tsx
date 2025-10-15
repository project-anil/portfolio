'use client'
import { motion } from "motion/react";

import { Download, Github, Linkedin, Mail, Dribbble } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./button";

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    alert("Resume download would start here. Connect this to your actual resume file.");
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div>
              <motion.p
                className="text-muted-foreground mb-4 tracking-wider uppercase text-sm"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                HELLO, I'M
              </motion.p>
              
              <motion.h1
                className="text-6xl sm:text-7xl lg:text-8xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Anil <span className="text-foreground">K N</span>
              </motion.h1>

              <motion.div
                className="flex items-center gap-3 mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="h-px w-12 bg-primary" />
                <p className="text-lg text-muted-foreground">Software Engineer II</p>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-muted-foreground leading-relaxed max-w-xl"
            >
              I create stunning visual designs and user experiences for digital products. 
              With a passion for clean aesthetics and functional design, I help brands 
              tell their stories through compelling visuals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button
 
                onClick={() => scrollToSection("#portfolio")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
                size="lg"
              >
                View Portfolio
              </Button>
              
              <Button 
                onClick={handleDownloadResume}
                variant="secondary"
                className="border-white hover:border-white "
                size="lg"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex gap-4 pt-4"
            >
           
              <motion.a
                href="https://www.linkedin.com/in/anil-kn-4276a4189"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300"
                whileHover={{ y: -3 }}
              >
                <Linkedin className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="https://github.com/project-anil"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300"
                whileHover={{ y: -3 }}
              >
                <Github className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="mailto:anilkn5087@gmail.com"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300"
                whileHover={{ y: -3 }}
              >
                <Mail className="h-4 w-4" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl" />
              <ImageWithFallback
                src="/images/anil.jpg"
                alt="Edward Davis"
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
              
              {/* Decorative elements */}
              <motion.div
                className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-primary rounded-2xl -z-10"
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
