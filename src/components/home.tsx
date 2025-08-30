import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
} from "lucide-react";
import PortfolioGrid from "./PortfolioGrid";
import CaseStudySection from "./CaseStudySection";
import ContactSection from "./ContactSection";

const Home = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="font-bold text-xl text-[#1E1E1E]">Shahab Uddin</div>
          <div className="hidden md:flex space-x-6">
            <button
              onClick={() => handleScroll("hero")}
              className={`${activeSection === "hero" ? "text-[#FFD43B]" : "text-[#1E1E1E]"} hover:text-[#FFD43B] transition-colors`}
            >
              Home
            </button>
            <button
              onClick={() => handleScroll("about")}
              className={`${activeSection === "about" ? "text-[#FFD43B]" : "text-[#1E1E1E]"} hover:text-[#FFD43B] transition-colors`}
            >
              About
            </button>
            <button
              onClick={() => handleScroll("portfolio")}
              className={`${activeSection === "portfolio" ? "text-[#FFD43B]" : "text-[#1E1E1E]"} hover:text-[#FFD43B] transition-colors`}
            >
              Portfolio
            </button>
            <button
              onClick={() => handleScroll("case-studies")}
              className={`${activeSection === "case-studies" ? "text-[#FFD43B]" : "text-[#1E1E1E]"} hover:text-[#FFD43B] transition-colors`}
            >
              Case Studies
            </button>
            <button
              onClick={() => handleScroll("contact")}
              className={`${activeSection === "contact" ? "text-[#FFD43B]" : "text-[#1E1E1E]"} hover:text-[#FFD43B] transition-colors`}
            >
              Contact
            </button>
          </div>
          <Button
            onClick={() => handleScroll("contact")}
            className="bg-[#FFD43B] text-[#1E1E1E] hover:bg-[#FFD43B]/90"
          >
            Hire Me
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 relative overflow-hidden">
        {/* Split Background */}
        <div className="absolute inset-0 flex">
          <div className="w-1/2 bg-white"></div>
          <div className="w-1/2 bg-[#FFF8DC] relative overflow-hidden">
            <div className="absolute -right-16 top-10 h-80 w-80 rounded-full bg-gradient-to-br from-[#FFE680] via-[#FFD43B]/70 to-transparent opacity-70 blur-2xl pointer-events-none"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-4">
              Hello, I&apos;m{" "}
              <span className="text-[#FFD43B]">Shahab Uddin</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-[#1E1E1E] mb-6">
              Graphic Designer | Creative Visual Storyteller | Branding &
              Digital Design | Final-Year IT Student
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              I specialize in Graphic Design, Logo Design, Branding &amp;
              Identity, Video Editing, Image Editing, Thumbnails, and Digital
              Design.
            </p>
            <Button
              onClick={() => handleScroll("portfolio")}
              className="bg-[#FFD43B] text-[#1E1E1E] hover:bg-[#FFD43B]/90 px-8 py-6 text-lg"
            >
              View My Work <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="md:w-1/2 flex justify-center md:pl-8">
            <div className="relative">
              <div className="relative rounded-full p-1.5 md:p-2 bg-gradient-to-br from-[#FFD43B] via-[#FFC300] to-transparent shadow-2xl">
                <div className="rounded-full bg-white/80 p-1">
                  <img
                    src="https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756359843/Image_1_xgpnth.png"
                    alt="Shahab Uddin"
                    className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover ring-4 ring-white shadow-2xl"
                  />
                </div>
              </div>
              <div className="absolute -z-10 inset-0 rounded-full bg-[#FFD43B]/30 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#F9F9F9] md:bg-[#F9F9F9]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            About <span className="text-[#FFD43B]">Me</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <p className="text-gray-700 mb-6 leading-relaxed">
                I&apos;m Shahab Uddin, a passionate graphic designer with 3
                years of experience in creating impactful visuals. My journey
                began at a local design company, Design Dreamscape, where I
                worked for 2 years, building a strong foundation in branding,
                logo design, and digital visuals.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Over time, I have expanded into video editing, thumbnails, and
                creative storytelling through design. I love bringing ideas to
                life, whether it&apos;s a brand identity, a digital campaign, or
                a visual story that connects with people.
              </p>
              <h3 className="text-xl font-semibold mb-4">Skills & Tools</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  "Canva",
                  "Photoshop",
                  "Illustrator",
                  "CapCut",
                  "After Effects",
                  "Premiere Pro",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="bg-white p-3 rounded-lg shadow-sm flex items-center"
                  >
                    <div className="w-3 h-3 bg-[#FFD43B] rounded-full mr-2"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10 flex justify-center">
              <div className="relative">
                <div className="absolute -z-10 w-full h-full bg-[#FFD43B] rounded-lg -bottom-4 -right-4"></div>
                <img
                  src="https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756359835/Graphic_Designer_eyy6n4.png"
                  alt="Graphic Designer"
                  className="w-full max-w-md rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            My <span className="text-[#FFD43B]">Portfolio</span>
          </h2>
          <PortfolioGrid />
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 bg-[#F9F9F9]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Featured <span className="text-[#FFD43B]">Case Studies</span>
          </h2>
          <CaseStudySection />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#1E1E1E]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            Let&apos;s <span className="text-[#FFD43B]">Work Together</span>
          </h2>
          <p className="text-gray-300 text-center max-w-xl mx-auto mb-16">
            Available for freelance collaborations and design projects
            worldwide. Reach out to bring your vision to life.
          </p>
          <ContactSection />
          <div className="mt-16 text-center">
            <p className="text-[#FFD43B] font-medium text-xl italic">
              "Design that speaks, visuals that connect."
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Shahab Uddin. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/shahab-uddin-4967b5380"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FFD43B]"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com/shahab_baloch97"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FFD43B]"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:shahabshah697@gmail.com"
                className="text-gray-400 hover:text-[#FFD43B]"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
