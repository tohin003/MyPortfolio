import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";
import ExperienceSection from "@/components/experience-section";
import ContactSection from "@/components/contact-section";
import FloatingContacts from "@/components/floating-contacts";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Floating Particles Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="particle w-2 h-2 top-[20%] left-[10%] animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="particle w-3 h-3 top-[60%] left-[80%] animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="particle w-1 h-1 top-[40%] left-[20%] animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="particle w-2 h-2 top-[80%] left-[60%] animate-float" style={{ animationDelay: '6s' }}></div>
        <div className="particle w-1 h-1 top-[10%] left-[70%] animate-float" style={{ animationDelay: '8s' }}></div>
      </div>

      <Navigation />
      <FloatingContacts />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Tohin Majumder. Built with passion and modern web technologies.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://github.com/tohin003" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <i className="fab fa-github text-xl"></i>
            </a>
            <a href="mailto:tohin1400@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
} 