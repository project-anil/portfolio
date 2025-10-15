'use client'
import { motion } from "motion/react";
import { GraduationCap, Briefcase } from "lucide-react";
import { Progress } from "./progress";


export function Resume() {
  const education = [
    {
      degree: "Master of Computer Appliaction In Inductrial Drives",
      school: "Viswaswera Technology of University ",
      period: "2017 - 2019",
      description: "Specialized in PLC, VLSI and IoT",
    },
    {
      degree: "Bachelor of Engineering",
      school: "Viswaswera Technology of University  ",
      period: "2014 - 2017",
      description: "Focused on Electrical and Electronics.",
    },
    {
      degree: "Diploma in Electrical and Electronics",
      school: "Department of Technical Education",
      period: "2011 - 2014",
      description: "Focused on Electrical and Electronics.",
    },
  ];

  const experience = [
    {
      position: "Senior Software Engineer",
      company: "Kenshilabs consultancy Pvt Ltd",
      period: "2020 - Present",
      description: "Leading Dev team for enterprise SaaS products, mentoring junior developers.",
    },
    {
      position: "Software Engineer I",
      company: "Terralogic Software Solutions",
      period: "2022 - 2024",
      description: "Developed end-to-end experiences for mobile and web applications.",
    },
    {
      position: "Trainee Software Engineer",
      company: "Terralogic Software Solutions",
      period: "2021 - 2022",
      description: "Learned React and Nextjs",
    },
  ];

  const skills = [
    { name: "React js", level: 90 },
    { name: "Next js", level: 85 },
    { name: "Go Lang", level: 95 },
    { name: "Tailwind css", level: 75 },
    { name: "Material UI", level: 92 },
    { name: "Ant Design", level: 88 },
  ];

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-wider mb-4">RESUME</p>
          <h2 className="text-4xl sm:text-5xl mb-4">Education & Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="text-2xl">Education</h3>
            </motion.div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 pb-8 border-l-2 border-border last:border-l-0 last:pb-0"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 -ml-[9px] rounded-full bg-primary border-4 border-background" />
                  <div className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                    <p className="text-sm text-primary mb-2">{edu.period}</p>
                    <h4 className="text-xl mb-1">{edu.degree}</h4>
                    <p className="text-muted-foreground mb-3">{edu.school}</p>
                    <p className="text-sm text-muted-foreground">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Briefcase className="h-6 w-6" />
              </div>
              <h3 className="text-2xl">Experience</h3>
            </motion.div>

            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.position}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 pb-8 border-l-2 border-border last:border-l-0 last:pb-0"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 -ml-[9px] rounded-full bg-primary border-4 border-background" />
                  <div className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                    <p className="text-sm text-primary mb-2">{exp.period}</p>
                    <h4 className="text-xl mb-1">{exp.position}</h4>
                    <p className="text-muted-foreground mb-3">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl mb-8 text-center">My Skills</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between mb-3">
                  <span className="text-foreground">{skill.name}</span>
                  <span className="text-primary">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
