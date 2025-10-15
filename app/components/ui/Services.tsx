'use client'
import { motion } from "motion/react";
import { Palette, Code, Smartphone, BarChart } from "lucide-react";
import { Card } from "./card";

export function Services() {
  const services = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Custom Web App Development",
      description: "Turn your ideas into high-performance web apps. Scalable MERN stack solutions built for growth. Reliable, fast, and ready for thousands of users.",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Modern Frontend Development",
      description: "React applications that users love. Built with Next.js, TypeScript, and Tailwind CSS for blazing-fast performance and stunning user experiences.",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "API Development & Backend Solutions",
      description: "Lightning-fast APIs that power your business. From RESTful services to GraphQL endpoints—I create robust backend systems that scale with your success.",
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Performance Optimization & Support",
      description: "Keep your applications running at peak performance. Ongoing optimization, security updates, and 24/7 support to ensure your business never slows down.",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-wider mb-4">SERVICES</p>
          <h2 className="text-4xl sm:text-5xl mb-4">What I Do</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Card className="p-8 h-full bg-background border-border hover:border-primary/50 flex justify-center items-center transition-all duration-500 group">
                <motion.div
                  className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl text-center mb-4">{service.title}</h3>
                <p className="text-muted-foreground text-center leading-relaxed">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
