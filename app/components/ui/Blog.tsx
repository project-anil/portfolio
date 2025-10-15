'use client'
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export function Blog() {
  const technologies = [
    { name: "HTML5", icon: "🌐", color: "#E34F26" },
    { name: "CSS3", icon: "🎨", color: "#1572B6" },
    { name: "JavaScript", icon: "⚡", color: "#F7DF1E" },
    { name: "TypeScript", icon: "📘", color: "#3178C6" },
    { name: "React.js", icon: "⚛️", color: "#61DAFB" },
    { name: "Next.js", icon: "▲", color: "#000000" },
    { name: "Redux", icon: "🔄", color: "#764ABC" },
    { name: "Node.js", icon: "🟢", color: "#339933" },
    { name: "Express.js", icon: "🚂", color: "#000000" },
    { name: "MongoDB", icon: "🍃", color: "#47A248" },
    { name: "Tailwind CSS", icon: "💨", color: "#06B6D4" },
    { name: "REST APIs", icon: "🔌", color: "#FF6C37" },
    { name: "GraphQL", icon: "🔺", color: "#E10098" },
    { name: "Jest", icon: "🃏", color: "#C21325" },
    { name: "Git", icon: "📦", color: "#F05032" },
  ];

  return (
    <section id="technologies" className="py-20 px-4 sm:px-6 lg:px-8 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Experience Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary/30 bg-primary/5 mb-8"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-primary text-sm uppercase tracking-wider">Experience</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl mb-12 max-w-4xl mx-auto leading-tight"
          >
            Technologies That Power Exceptional Results
          </motion.h2>
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1]
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
              }}
              className="group"
            >
              <div className="px-6 py-3 rounded-full bg-background border border-border hover:border-primary/50 transition-all duration-300 flex items-center gap-3 cursor-pointer hover:shadow-lg hover:shadow-primary/10">
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </span>
                <span className="text-sm sm:text-base whitespace-nowrap group-hover:text-primary transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-muted-foreground">
            Ready to build something extraordinary?{" "}
            <motion.span 
              className="text-primary cursor-pointer inline-block"
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Let's create it together!
            </motion.span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
