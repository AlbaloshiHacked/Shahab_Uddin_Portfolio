import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ChevronRight } from "lucide-react";

interface CaseStudyProps {
  title: string;
  client: string;
  description: string;
  challenge: string;
  solution: string;
  results: string;
  tools: string[];
  images: {
    before?: string;
    after?: string;
    showcase: string[];
  };
}

const CaseStudySection = () => {
  const [activeTab, setActiveTab] = useState("redkoar");

  const caseStudies: Record<string, CaseStudyProps> = {
    redkoar: {
      title: "Redkoar",
      client: "E-commerce Platform",
      description:
        "Developed full branding and identity for Redkoar, an online e-commerce platform operating in Pakistan, UAE, and Europe. Created brand name, logo, product pictures, and more.",
      challenge:
        "Redkoar needed a complete brand identity that would work across multiple markets while maintaining a consistent and recognizable presence. The challenge was to create a versatile brand system that could adapt to different cultural contexts while remaining cohesive.",
      solution:
        "I developed a comprehensive branding package including logo design, color palette, typography system, and product photography guidelines. The brand identity was designed to be flexible across digital and physical touchpoints.",
      results:
        "The new branding helped Redkoar establish a strong market presence across three regions, with a 40% increase in brand recognition metrics and improved customer engagement across digital platforms.",
      tools: ["Photoshop", "Illustrator", "Canva"],
      images: {
        before:
          "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80",
        after:
          "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756360120/Redkoar_1_usa6lw.png",
        showcase: [
          "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756360121/Redkoar_2_w99rq0.png",
          "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?w=800&q=80",
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
        ],
      },
    },
    beMasculine: {
      title: "Be Masculine",
      client: "YouTube Channel",
      description:
        "Built the full brand for Be Masculine, a YouTube channel focused on motivation and discipline. Designed channel name, logo, edited videos, created thumbnails, and branding visuals.",
      challenge:
        "The channel needed a strong visual identity to stand out in the crowded motivation content space. The visuals needed to convey strength and discipline while remaining approachable and inspiring.",
      solution:
        "I created a bold brand identity with a distinctive color palette, custom thumbnail templates, and video editing style guide. The visual system was designed to be easily recognizable and consistent across all content.",
      results:
        "The channel saw a 65% increase in click-through rate on thumbnails and a 30% improvement in viewer retention. The consistent branding helped establish a loyal audience base.",
      tools: ["Canva", "CapCut", "Illustrator"],
      images: {
        before:
          "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
        after:
          "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756360087/masculine_2_u3eaof.png",
        showcase: [
          "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756359854/Untitled_design_5_aekv1g.png",
          "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756360086/masculine_1_seawrk.png",
          "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756360087/masculine_2_u3eaof.png",
        ],
      },
    },
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1E1E1E]">
            Featured Case Studies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dive deeper into selected projects to see my design process,
            challenges, and solutions.
          </p>
        </div>

        <Tabs
          defaultValue="redkoar"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-100">
              <TabsTrigger
                value="redkoar"
                className={`px-6 py-3 ${activeTab === "redkoar" ? "bg-[#FFD43B] text-[#1E1E1E]" : ""}`}
              >
                Redkoar
              </TabsTrigger>
              <TabsTrigger
                value="beMasculine"
                className={`px-6 py-3 ${activeTab === "beMasculine" ? "bg-[#FFD43B] text-[#1E1E1E]" : ""}`}
              >
                Be Masculine
              </TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(caseStudies).map(([key, study]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <Card className="border-none shadow-lg rounded-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="bg-[#F9F9F9] p-8 lg:p-12">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-[#1E1E1E] mb-1">
                          {study.title}
                        </h3>
                        <p className="text-gray-500">{study.client}</p>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold mb-2 flex items-center">
                            <span className="w-6 h-0.5 bg-[#FFD43B] mr-2"></span>
                            Overview
                          </h4>
                          <p className="text-gray-700">{study.description}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-2 flex items-center">
                            <span className="w-6 h-0.5 bg-[#FFD43B] mr-2"></span>
                            Challenge
                          </h4>
                          <p className="text-gray-700">{study.challenge}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-2 flex items-center">
                            <span className="w-6 h-0.5 bg-[#FFD43B] mr-2"></span>
                            Solution
                          </h4>
                          <p className="text-gray-700">{study.solution}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-2 flex items-center">
                            <span className="w-6 h-0.5 bg-[#FFD43B] mr-2"></span>
                            Results
                          </h4>
                          <p className="text-gray-700">{study.results}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-2 flex items-center">
                            <span className="w-6 h-0.5 bg-[#FFD43B] mr-2"></span>
                            Tools Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {study.tools.map((tool, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="bg-white border-[#FFD43B] text-[#1E1E1E]"
                              >
                                {tool}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-8 lg:p-12">
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold mb-4 flex items-center">
                          <span className="w-6 h-0.5 bg-[#FFD43B] mr-2"></span>
                          Before & After
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {study.images.before && (
                            <div>
                              <p className="text-sm text-gray-500 mb-2">
                                Before
                              </p>
                              <AspectRatio
                                ratio={16 / 9}
                                className="bg-gray-100 rounded-lg overflow-hidden"
                              >
                                <img
                                  src={study.images.before}
                                  alt={`${study.title} before`}
                                  className="object-cover w-full h-full"
                                />
                              </AspectRatio>
                            </div>
                          )}
                          {study.images.after && (
                            <div>
                              <p className="text-sm text-gray-500 mb-2">
                                After
                              </p>
                              <AspectRatio
                                ratio={16 / 9}
                                className="bg-gray-100 rounded-lg overflow-hidden"
                              >
                                <img
                                  src={study.images.after}
                                  alt={`${study.title} after`}
                                  className="object-cover w-full h-full"
                                />
                              </AspectRatio>
                            </div>
                          )}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-4 flex items-center">
                          <span className="w-6 h-0.5 bg-[#FFD43B] mr-2"></span>
                          Project Showcase
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {study.images.showcase.map((image, index) => (
                            <AspectRatio
                              key={index}
                              ratio={1 / 1}
                              className="bg-gray-100 rounded-lg overflow-hidden"
                            >
                              <img
                                src={image}
                                alt={`${study.title} showcase ${index + 1}`}
                                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                              />
                            </AspectRatio>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center">
          <a
            href="#portfolio"
            className="inline-flex items-center text-[#1E1E1E] font-medium hover:text-[#FFD43B] transition-colors"
          >
            View all projects <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
