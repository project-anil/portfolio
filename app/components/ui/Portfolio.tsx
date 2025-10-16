'use client'
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card } from "./card";

export function Portfolio() {
  const projects = [
    {
      title: "SME Junction – Business Marketplace Platform",
      category: "E-Commerce Platform",
      image: "/images/smejunction.png",
      link: "https://www.smejunction.com"
    },
    {
      title: "Kenshi Labs – Digital Transformation Platform",
      category: "Enterprise Digital Platform",
      image: "/images/kenshilabs.jpg",
      link: "https://www.kenshilabs.com"
    },
    {
      title: "Bengal Rice Mills Association – Industry Portal",
      category: "Industry Association Portal",
      image: "/images/brma.jpg",
      link: "https://bengalricemillers.com"
    },
    {
      title: "Sight and Life - NGO",
      category: "NGO Platform",
      image: "/images/sight.jpeg",
      link: "https://sightandlife.org"
    },
    {
      title: "Collabera Digitals",
      category: "Digital Platform",
      image: "/images/collebera.jpg",
      link: "https://collaberadigital.com"
    },
    {
      title: "SMEPulse App",
      category: "Mobile Development",
      image: "/images/smepulse1.webp",
      link: ""
    },
  ];
  

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-wider mb-4">PORTFOLIO</p>
          <h2 className="text-4xl sm:text-5xl mb-4">Featured Work</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
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
              <Card className="overflow-hidden group cursor-pointer bg-card border-border hover:border-primary/50 transition-all duration-500">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="w-full">
                      <p className="text-primary text-sm mb-2">{project.category}</p>
                      <h3 className="text-white text-xl mb-3">{project.title}</h3>
                      <a href={project.link} className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
