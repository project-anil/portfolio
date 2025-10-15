'use client'
import { motion } from "motion/react";
import { Calendar, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "./button";

export function About() {
  const personalInfo = [
    { label: "Birthday", value: "September 05, 1995", icon: <Calendar className="h-4 w-4" /> },
    { label: "Age", value: "30 Years", icon: <Calendar className="h-4 w-4" /> },
    { label: "Location", value: "Bengaluru", icon: <MapPin className="h-4 w-4" /> },
    { label: "Phone", value: "+91-6363031764", icon: <Phone className="h-4 w-4" /> },
    { label: "Email", value: "anilkn5087@gmail.com", icon: <Mail className="h-4 w-4" /> },
    { label: "Freelance", value: "Available", icon: <Calendar className="h-4 w-4" /> },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-wider mb-4">ABOUT ME</p>
          <h2 className="text-4xl sm:text-5xl mb-4">Know Me More</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl mb-4">
                Hi There! I'm <span className="text-primary">Anil K N</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a Frontend Developer with 4 years of experience building fast, scalable, and user-friendly web applications. My main focus is on creating seamless user experiences using modern technologies like Next.js, React, and Tailwind CSS.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I’m passionate about clean code, performance optimization, and building responsive interfaces that work across devices. Whether it's developing new features, improving UI/UX, or optimizing web performance, I aim to deliver robust and maintainable solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Outside of coding, I enjoy exploring new frontend tools, contributing to open-source projects, and keeping up with the latest in web development. And yes, a good cup of coffee always helps when I'm deep in code!
              </p>
            </div>


            <div className="pt-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                Hire Me
              </Button>
            </div>
          </motion.div>

          {/* Right - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="grid sm:grid-cols-2 gap-6">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="text-primary mt-1">{info.icon}</div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{info.label}:</p>
                      <p className="text-foreground">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4 mt-8"
            >
              <div className="text-center p-6 bg-card border border-border rounded-xl">
                <p className="text-4xl text-primary mb-2">15+</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div className="text-center p-6 bg-card border border-border rounded-xl">
                <p className="text-4xl text-primary mb-2">10+</p>
                <p className="text-sm text-muted-foreground">Clients</p>
              </div>
              <div className="text-center p-6 bg-card border border-border rounded-xl">
                <p className="text-4xl text-primary mb-2">4+</p>
                <p className="text-sm text-muted-foreground">Years</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
