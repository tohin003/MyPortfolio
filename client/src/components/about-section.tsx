import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const skills = {
  programming: [
    { name: "Python", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "C/C++", level: 80 },
    { name: "Java", level: 75 },
  ],
  web: [
    { name: "React", level: 85 },
    { name: "PHP", level: 80 },
    { name: "HTML/CSS", level: 90 },
    { name: "Tailwind CSS", level: 85 },
  ],
  ai: [
    { name: "TensorFlow", level: 85 },
    { name: "OpenCV", level: 80 },
    { name: "Pandas", level: 80 },
    { name: "NumPy", level: 85 },
  ],
};

function SkillBar({ name, level, delay = 0 }: { name: string; level: number; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className="skill-item">
      <div className="flex justify-between mb-2">
        <span>{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className={`skill-bar ${isVisible ? 'animate' : ''}`}>
        <motion.div 
          className="skill-fill"
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function AboutSection() {
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation();
  const { ref: educationRef, isVisible: educationVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Background and Education */}
          <div ref={aboutRef} className={`section-reveal ${aboutVisible ? 'animate' : ''}`}>
            <h3 className="text-2xl font-semibold mb-6">Background</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a passionate Computer Science student at Sharda University specializing in AI and Machine Learning. 
              With hands-on experience in both web development and artificial intelligence, I bridge the gap between 
              theoretical knowledge and practical implementation.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              My journey spans from building full-stack web applications to developing sophisticated machine learning 
              models for real-world problems like crop disease detection and adversarial attack research.
            </p>
            
            {/* Education Timeline */}
            <div ref={educationRef} className="glass p-6 rounded-xl mb-8">
              <h4 className="text-xl font-semibold mb-4 text-primary">Education</h4>
              <div className={`timeline-item ${educationVisible ? 'animate' : ''}`}>
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                  <span className="text-muted-foreground">2022 - 2026</span>
                </div>
                <h5 className="font-semibold">Bachelor of Technology</h5>
                <p className="text-muted-foreground">Computer Science & Engineering (AI & ML)</p>
                <p className="text-muted-foreground">Sharda University, Greater Noida</p>
                <p className="text-sm text-muted-foreground">Roll No.: 2201010904</p>
              </div>
            </div>

            {/* Awards Section */}
            <div className="glass p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-4 text-primary">Awards & Scholarships</h4>
              <div className="space-y-4">
                <div className="timeline-item">
                  <h5 className="font-semibold text-green-400">Reliance Foundation Undergraduate Scholarship</h5>
                  <p className="text-muted-foreground text-sm">Selected among 5,000 meritorious students across India</p>
                  <p className="text-muted-foreground text-sm">₹2 lakhs scholarship (2022-2025)</p>
                </div>
                <div className="timeline-item">
                  <h5 className="font-semibold text-green-400">Northeast State Scholarship</h5>
                  <p className="text-muted-foreground text-sm">Academic excellence and financial need based award</p>
                  <p className="text-muted-foreground text-sm">2023-2026</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="section-reveal">
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            
            <div className="space-y-8">
              {/* Programming Languages */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-primary">Programming Languages</h4>
                <div className="grid grid-cols-1 gap-4">
                  {skills.programming.map((skill, index) => (
                    <SkillBar key={skill.name} {...skill} delay={index * 0.2} />
                  ))}
                </div>
              </div>

              {/* Web Technologies */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-purple-400">Web Technologies</h4>
                <div className="grid grid-cols-1 gap-4">
                  {skills.web.map((skill, index) => (
                    <SkillBar key={skill.name} {...skill} delay={index * 0.2} />
                  ))}
                </div>
              </div>

              {/* AI/ML Technologies */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-pink-400">AI/ML & Data Science</h4>
                <div className="grid grid-cols-1 gap-4">
                  {skills.ai.map((skill, index) => (
                    <SkillBar key={skill.name} {...skill} delay={index * 0.2} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
