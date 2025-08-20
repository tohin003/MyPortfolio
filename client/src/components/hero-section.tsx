import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import profileImage from "@assets/profile-image.png";

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const fullText = "AI/ML Developer & Full Stack Engineer";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const handleScrollToProjects = () => {
    const projectsElement = document.getElementById('projects');
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-blue-900/20 to-purple-900/20"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-40 h-40 mx-auto mb-8 floating-animation">
            <img 
              src={profileImage} 
              alt="Tohin Majumder" 
              className="w-full h-full rounded-full object-cover border-4 border-primary/50 shadow-2xl shadow-primary/20"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-purple-600/20"></div>
          </div>
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I'm <span className="gradient-text">Tohin Majumder</span>
        </motion.h1>

        <div className="text-xl md:text-2xl text-muted-foreground mb-8 h-16 flex items-center justify-center">
          <span className="font-mono">
            {typedText}
            <span className="typing-cursor"></span>
          </span>
        </div>

        <motion.p 
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Computer Science student at Sharda University specializing in AI/ML, building innovative solutions 
          with modern web technologies and machine learning.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button
            onClick={handleScrollToProjects}
            className="px-8 py-3 bg-gradient-to-r from-primary to-purple-600 rounded-full text-primary-foreground font-semibold hover:scale-105 transition-transform duration-300"
          >
            View My Work
          </button>
          <button
            onClick={handleScrollToContact}
            className="px-8 py-3 border-2 border-primary rounded-full text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}
