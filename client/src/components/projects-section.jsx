import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Interactive Dashboard",
    description: "Comprehensive web-based dashboard for managing products, employees, customers, and orders with real-time data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    technologies: ["PHP", "JavaScript", "Bootstrap", "MySQL"],
    color: "blue",
    highlights: [
      "Tracks 500+ product orders monthly",
      "Reduced data handling errors by 25%",
      "Real-time charts and analytics",
      "Comprehensive search and sorting system"
    ],
    github: "https://github.com/tohin003",
    demo: "#"
  },
  {
    title: "Crop Disease Detection",
    description: "Advanced machine learning model using CNN to detect crop diseases and provide pesticide recommendations.",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    technologies: ["TensorFlow", "OpenCV", "Python", "CNN"],
    color: "green",
    highlights: [
      "92% accuracy on 10,000+ crop images",
      "Reduced false positives by 18%",
      "Integrated pesticide recommendation system",
      "Real-time disease classification"
    ],
    github: "https://github.com/tohin003",
    demo: "#"
  },
  {
    title: "Handwritten Letter Recognition",
    description: "Deep learning neural network model for recognizing handwritten letters with advanced data augmentation techniques.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    technologies: ["TensorFlow", "Keras", "DNN", "HDF5"],
    color: "purple",
    highlights: [
      "95% accuracy on synthetic dataset",
      "3-layer DNN with 30% dropout",
      "2x training data through augmentation",
      "Optimized over 500 epochs"
    ],
    github: "https://github.com/tohin003",
    demo: "#"
  },
  {
    title: "Portfolio Website Template",
    description: "Responsive and customizable portfolio template designed for developers and designers with modern UI/UX.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    technologies: ["React", "HTML", "CSS", "Responsive"],
    color: "cyan",
    highlights: [
      "Fully responsive design",
      "Modern UI/UX principles",
      "Customizable components",
      "Cross-browser compatibility"
    ],
    github: "https://github.com/tohin003",
    demo: "#"
  }
];

const colorVariants = {
  blue: "text-blue-400 bg-blue-500/20",
  green: "text-green-400 bg-green-500/20",
  purple: "text-purple-400 bg-purple-500/20",
  cyan: "text-cyan-400 bg-cyan-500/20"
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card glass p-6 rounded-xl group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${colorVariants[project.color]}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <ul className="mb-6 space-y-1">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    {highlight}
                  </li>
                ))}
              </ul>
              
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors"
                >
                  <Github size={16} />
                  Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-colors"
                >
                  <ExternalLink size={16} />
                  Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 