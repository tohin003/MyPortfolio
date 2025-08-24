import { motion } from "framer-motion";
import { Brain, Code } from "lucide-react";

const experiences = [
  {
    title: "AI Intern",
    company: "IIT Tirupati, Andhra Pradesh",
    duration: "May - July 2025",
    location: "Remote",
    icon: Brain,
    color: "from-blue-500 to-purple-600",
    achievements: [
      "Researched YOLOv5's vulnerability to digital (FGSM, PGD) and physical (adversarial patch) attacks on 2D object detection",
      "Executed frame-wise video attacks, causing significant drops in detection accuracy and revealing model weaknesses",
      "Documented comprehensive results to support future research on robust detection systems",
      "Collaborated with research team on cutting-edge AI security methodologies"
    ],
    technologies: ["YOLOv5", "Adversarial Attacks", "Computer Vision", "AI Security"]
  },
  {
    title: "Full Stack Web Developer Intern",
    company: "StudyTable, Tripura",
    duration: "May - July 2024",
    location: "Remote",
    icon: Code,
    color: "from-green-500 to-blue-600",
    achievements: [
      "Developed full-stack dashboard managing 500+ product orders using PHP/MySQL, reducing data errors by 25%",
      "Implemented comprehensive CRUD operations with advanced search/sort features, improving user productivity by 30%",
      "Created interactive data visualization charts using JavaScript for real-time business insights",
      "Optimized database queries and implemented caching strategies for improved performance"
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-purple-600 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => {
              const IconComponent = experience.icon;
              
              return (
                <motion.div 
                  key={experience.title}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${experience.color} rounded-full flex items-center justify-center mr-8 relative z-10 hidden md:flex`}>
                    <IconComponent className="text-white" size={24} />
                  </div>
                  
                  <div className="glass p-6 rounded-xl flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className={`text-xl font-semibold ${index === 0 ? 'text-primary' : 'text-green-400'}`}>
                          {experience.title}
                        </h3>
                        <p className="text-muted-foreground">{experience.company}</p>
                      </div>
                      <div className="text-muted-foreground text-sm mt-2 md:mt-0">
                        <div className="flex items-center gap-2">
                          <i className="fas fa-calendar"></i>
                          {experience.duration}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <i className="fas fa-map-marker-alt"></i>
                          {experience.location}
                        </div>
                      </div>
                    </div>
                    
                    <ul className="text-muted-foreground space-y-2 mb-4">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx}>• {achievement}</li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-muted rounded-full text-sm font-medium text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
} 