import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Brain, Code2, Database, Palette } from "lucide-react";
import { SiPython, SiJavascript, SiCplusplus, SiReact, SiPhp, SiHtml5, SiTailwindcss, SiTensorflow, SiOpencv, SiPandas, SiNumpy, SiMysql, SiFirebase, SiAmazon, SiBootstrap } from "react-icons/si";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    skills: [
      { name: "Python", icon: SiPython, level: 90, color: "text-yellow-400" },
      { name: "JavaScript", icon: SiJavascript, level: 85, color: "text-yellow-300" },
      { name: "C/C++", icon: SiCplusplus, level: 80, color: "text-blue-400" },
      { name: "Java", icon: Code2, level: 75, color: "text-red-400" },
    ]
  },
  {
    title: "Web Technologies", 
    icon: Palette,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    skills: [
      { name: "React", icon: SiReact, level: 85, color: "text-cyan-400" },
      { name: "PHP", icon: SiPhp, level: 80, color: "text-purple-400" },
      { name: "HTML/CSS", icon: SiHtml5, level: 90, color: "text-orange-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 85, color: "text-teal-400" },
    ]
  },
  {
    title: "AI/ML & Data Science",
    icon: Brain,
    color: "text-pink-400", 
    bgColor: "bg-pink-500/10",
    skills: [
      { name: "TensorFlow", icon: SiTensorflow, level: 85, color: "text-orange-400" },
      { name: "OpenCV", icon: SiOpencv, level: 80, color: "text-green-400" },
      { name: "Pandas", icon: SiPandas, level: 80, color: "text-blue-300" },
      { name: "NumPy", icon: SiNumpy, level: 85, color: "text-blue-400" },
    ]
  },
  {
    title: "Databases & Cloud",
    icon: Database,
    color: "text-green-400",
    bgColor: "bg-green-500/10", 
    skills: [
      { name: "MySQL", icon: SiMysql, level: 80, color: "text-blue-400" },
      { name: "Firebase", icon: SiFirebase, level: 75, color: "text-yellow-400" },
      { name: "AWS", icon: SiAmazon, level: 70, color: "text-orange-400" },
      { name: "Bootstrap", icon: SiBootstrap, level: 85, color: "text-purple-400" },
    ]
  }
];

function SkillCard({ category, delay = 0 }: { category: any; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation();
  const IconComponent = category.icon;

  return (
    <motion.div
      ref={ref}
      className={`glass p-6 rounded-xl ${category.bgColor}`}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
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
        {category.skills.map((skill: any, index: number) => {
          const SkillIcon = skill.icon;
          return (
            <div key={skill.name} className="flex flex-col items-center p-3 bg-background/50 rounded-lg hover:scale-105 transition-transform duration-300">
              <SkillIcon className={`${skill.color} mb-2`} size={24} />
              <span className="text-sm font-medium text-center">{skill.name}</span>
              <div className="w-full bg-muted rounded-full h-2 mt-2">
                <motion.div
                  className={`h-2 rounded-full bg-gradient-to-r from-${skill.color.replace('text-', '')} to-${skill.color.replace('text-', '')}`}
                  initial={{ width: 0 }}
                  animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1.5, delay: delay + index * 0.1 }}
                  style={{ 
                    background: `linear-gradient(90deg, ${skill.color.includes('blue') ? '#60a5fa' : 
                                                      skill.color.includes('yellow') ? '#fbbf24' :
                                                      skill.color.includes('purple') ? '#a855f7' :
                                                      skill.color.includes('cyan') ? '#22d3ee' :
                                                      skill.color.includes('orange') ? '#fb923c' :
                                                      skill.color.includes('teal') ? '#2dd4bf' :
                                                      skill.color.includes('pink') ? '#f472b6' :
                                                      skill.color.includes('green') ? '#4ade80' :
                                                      skill.color.includes('red') ? '#f87171' : '#60a5fa'}, 
                                ${skill.color.includes('blue') ? '#1d4ed8' : 
                                  skill.color.includes('yellow') ? '#d97706' :
                                  skill.color.includes('purple') ? '#7c3aed' :
                                  skill.color.includes('cyan') ? '#0891b2' :
                                  skill.color.includes('orange') ? '#ea580c' :
                                  skill.color.includes('teal') ? '#0d9488' :
                                  skill.color.includes('pink') ? '#ec4899' :
                                  skill.color.includes('green') ? '#16a34a' :
                                  skill.color.includes('red') ? '#dc2626' : '#1d4ed8'})`
                  }}
                />
              </div>
              <span className="text-xs text-muted-foreground mt-1">{skill.level}%</span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation();
  const { ref: educationRef, isVisible: educationVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-600 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-5xl font-bold text-center mb-20 gradient-text"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Personal Story */}
          <motion.div 
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-3xl font-semibold mb-6 gradient-text">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  I'm a passionate Computer Science student at <span className="text-primary font-semibold">Sharda University</span> specializing in 
                  <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold"> Artificial Intelligence and Machine Learning</span>. 
                  My journey in technology is driven by curiosity and a desire to solve real-world problems through innovative solutions.
                </p>
                <p>
                  From developing <span className="text-green-400 font-semibold">machine learning models</span> that achieve 95% accuracy in handwritten letter recognition 
                  to building <span className="text-blue-400 font-semibold">full-stack web applications</span> managing 500+ orders, I bridge the gap between 
                  theoretical knowledge and practical implementation.
                </p>
                <p>
                  Currently researching <span className="text-pink-400 font-semibold">adversarial attacks on AI systems</span> at IIT Tirupati, 
                  I'm passionate about both creating intelligent systems and understanding their vulnerabilities to build more robust AI solutions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Quick Stats & Education */}
          <div className="space-y-6">
            <motion.div 
              className="glass p-6 rounded-xl"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-4 text-primary">Education</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">B.Tech CSE (AI & ML)</p>
                    <p className="text-sm text-muted-foreground">Sharda University • 2022-2026</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="glass p-6 rounded-xl"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-4 text-green-400">Achievements</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                  <div>
                    <p className="font-semibold text-sm">Reliance Foundation Scholar</p>
                    <p className="text-xs text-muted-foreground">Selected among 5,000 students nationwide</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                  <div>
                    <p className="font-semibold text-sm">Northeast State Scholarship</p>
                    <p className="text-xs text-muted-foreground">Academic excellence award</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="glass p-6 rounded-xl"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-4 text-purple-400">Interests</h4>
              <div className="flex flex-wrap gap-2">
                {["AI Research", "Web Development", "IoT", "Cloud Computing", "Cybersecurity"].map((interest, index) => (
                  <span key={interest} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">Technical Expertise</h3>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCard key={category.title} category={category} delay={index * 0.1} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
