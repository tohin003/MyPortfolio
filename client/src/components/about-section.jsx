import { motion } from "framer-motion";
import { Brain, Code2, Database, Palette } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    skills: [
      { name: "Python", level: 90, color: "text-yellow-400" },
      { name: "JavaScript", level: 85, color: "text-yellow-300" },
      { name: "C/C++", level: 80, color: "text-blue-400" },
      { name: "Java", level: 75, color: "text-red-400" },
    ]
  },
  {
    title: "Web Technologies", 
    icon: Palette,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    skills: [
      { name: "React", level: 85, color: "text-cyan-400" },
      { name: "PHP", level: 80, color: "text-purple-400" },
      { name: "HTML/CSS", level: 90, color: "text-orange-400" },
      { name: "Tailwind CSS", level: 85, color: "text-teal-400" },
    ]
  },
  {
    title: "AI/ML & Data Science",
    icon: Brain,
    color: "text-pink-400", 
    bgColor: "bg-pink-500/10",
    skills: [
      { name: "TensorFlow", level: 85, color: "text-orange-400" },
      { name: "OpenCV", level: 80, color: "text-green-400" },
      { name: "Pandas", level: 80, color: "text-blue-300" },
      { name: "NumPy", level: 85, color: "text-blue-400" },
    ]
  },
  {
    title: "Databases & Cloud",
    icon: Database,
    color: "text-green-400",
    bgColor: "bg-green-500/10", 
    skills: [
      { name: "MySQL", level: 80, color: "text-blue-400" },
      { name: "Firebase", level: 75, color: "text-yellow-400" },
      { name: "AWS", level: 70, color: "text-orange-400" },
      { name: "Bootstrap", level: 85, color: "text-purple-400" },
    ]
  }
];

function SkillCard({ category, delay = 0 }) {
  const IconComponent = category.icon;

  return (
    <motion.div
      className={`glass p-6 rounded-xl ${category.bgColor}`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      <div className="flex items-center mb-6">
        <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mr-4`}>
          <IconComponent className={category.color} size={24} />
        </div>
        <h4 className={`text-lg font-semibold ${category.color}`}>
          {category.title}
        </h4>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {category.skills.map((skill, index) => (
          <div key={skill.name} className="flex flex-col items-center p-3 bg-background/50 rounded-lg hover:scale-105 transition-transform duration-300">
            <span className={`${skill.color} mb-2 text-2xl`}>•</span>
            <span className="text-sm font-medium text-center">{skill.name}</span>
            <div className="w-full bg-muted rounded-full h-2 mt-2">
              <motion.div
                className="h-2 rounded-full bg-gradient-to-r from-primary to-purple-600"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1.5, delay: delay + index * 0.1 }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate Computer Science student at Sharda University with a deep interest in 
            Artificial Intelligence, Machine Learning, and Full Stack Development. I love building 
            innovative solutions that make a difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
} 