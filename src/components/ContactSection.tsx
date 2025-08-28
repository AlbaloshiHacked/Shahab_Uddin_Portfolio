import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

interface ContactSectionProps {
  email?: string;
  phone?: string;
  location?: string;
  linkedinUrl?: string;
  instagramUrl?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  email = "shahabshah697@gmail.com",
  phone = "+92 328 2360529",
  location = "Karachi, Pakistan (Remote Available)",
  linkedinUrl = "linkedin.com/in/shahab-uddin-4967b5380",
  instagramUrl = "instagram.com/shahab_baloch97",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        type: "success",
        message: "Thank you for your message! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="bg-[#1E1E1E] text-white py-20 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Work Together.
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-300">
            Available for freelance collaborations and design projects
            worldwide. Reach out to bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-[#252525] p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-[#333333] border-[#444444] text-white placeholder:text-gray-400 focus:border-[#FFD43B]"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    className="bg-[#333333] border-[#444444] text-white placeholder:text-gray-400 focus:border-[#FFD43B]"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="bg-[#333333] border-[#444444] text-white placeholder:text-gray-400 focus:border-[#FFD43B] min-h-[150px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FFD43B] hover:bg-[#FFC300] text-black font-medium py-3 rounded-md transition-colors"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                {submitStatus.type && (
                  <div
                    className={`mt-4 p-3 rounded-md ${submitStatus.type === "success" ? "bg-green-900/30 text-green-300" : "bg-red-900/30 text-red-300"}`}
                  >
                    {submitStatus.message}
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>

              <ul className="space-y-6">
                <li className="flex items-start">
                  <Mail className="h-6 w-6 text-[#FFD43B] mr-4 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href={`mailto:${email}`}
                      className="text-gray-300 hover:text-[#FFD43B] transition-colors"
                    >
                      {email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start">
                  <Phone className="h-6 w-6 text-[#FFD43B] mr-4 mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="text-gray-300 hover:text-[#FFD43B] transition-colors"
                    >
                      {phone}
                    </a>
                  </div>
                </li>

                <li className="flex items-start">
                  <MapPin className="h-6 w-6 text-[#FFD43B] mr-4 mt-1" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-300">{location}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6">Connect</h3>

              <div className="flex space-x-4">
                <a
                  href={`https://${linkedinUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#333333] hover:bg-[#FFD43B] p-3 rounded-full transition-colors group"
                >
                  <Linkedin className="h-6 w-6 text-white group-hover:text-black" />
                </a>

                <a
                  href={`https://${instagramUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#333333] hover:bg-[#FFD43B] p-3 rounded-full transition-colors group"
                >
                  <Instagram className="h-6 w-6 text-white group-hover:text-black" />
                </a>
              </div>
            </div>

            <div className="mt-12 border-t border-[#444444] pt-8">
              <p className="text-[#FFD43B] text-xl font-medium italic">
                "Design that speaks, visuals that connect."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
