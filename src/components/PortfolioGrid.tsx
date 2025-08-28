import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  tools: string[];
  client?: string;
}

interface PortfolioGridProps {
  items?: PortfolioItem[];
}

const PortfolioGrid = ({
  items = defaultPortfolioItems,
}: PortfolioGridProps) => {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "logo", label: "Logo Design" },
    { id: "video", label: "Video Editing" },
    { id: "image", label: "Image Editing" },
    { id: "digital", label: "Digital Design" },
  ];

  const filteredItems =
    filter === "all" ? items : items.filter((item) => item.category === filter);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-center text-[#1E1E1E]">
        My Portfolio
      </h2>

      {/* Category Filter */}
      <Tabs value={filter} onValueChange={setFilter} className="w-full mb-12">
        <TabsList className="flex justify-center flex-wrap gap-2 mb-8 bg-transparent">
          {categories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className={`px-6 py-2 rounded-full border border-gray-200 transition-all ${filter === category.id ? "bg-[#FFD43B] text-[#1E1E1E] border-[#FFD43B]" : "bg-white text-[#1E1E1E] hover:bg-gray-100"}`}
            >
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer"
          >
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <Button
                        variant="default"
                        className="bg-[#FFD43B] text-[#1E1E1E] hover:bg-[#FFD43B]/90"
                      >
                        View Project
                      </Button>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl bg-white p-0 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="bg-gray-100 p-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col">
                    <h3 className="text-2xl font-bold text-[#1E1E1E] mb-2">
                      {item.title}
                    </h3>
                    <Badge className="w-fit mb-4 bg-[#FFD43B] text-[#1E1E1E] hover:bg-[#FFD43B]/90">
                      {categories.find((cat) => cat.id === item.category)
                        ?.label || item.category}
                    </Badge>
                    <p className="text-gray-700 mb-6">{item.description}</p>

                    {item.client && (
                      <div className="mb-4">
                        <span className="font-semibold text-[#1E1E1E]">
                          Client:
                        </span>{" "}
                        {item.client}
                      </div>
                    )}

                    <div className="mb-4">
                      <span className="font-semibold text-[#1E1E1E]">
                        Tools:
                      </span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {item.tools.map((tool, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="bg-gray-100"
                          >
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <div className="p-4 bg-white">
              <h3 className="font-medium text-lg text-[#1E1E1E]">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500">
                {categories.find((cat) => cat.id === item.category)?.label ||
                  item.category}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Default portfolio items for demonstration
const defaultPortfolioItems: PortfolioItem[] = [
  {
    id: "14",
    title: "Black White Yellow Simple Initial Name Logo",
    category: "logo",
    image:
      "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756359810/Black_White_Yellow_Simple_Initial_Name_Logo_wk8ek6.png",
    description: "Bold monogram logo design with yellow accent.",
    tools: ["Illustrator", "Photoshop"],
    client: "Shay Haq",
  },
  {
    id: "15",
    title: "Image Editing - Primary (img 3)",
    category: "image",
    image:
      "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756359850/img_3_fg425s.png",
    description: "Image editing showcase.",
    tools: ["Photoshop", "Lightroom"],
  },
  {
    id: "1",
    title: "Redkoar Brand Identity",
    category: "logo",
    image:
      "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756360122/Redkoar_logo_u3w0fi.png",
    description:
      "Complete brand identity design for Redkoar, an e-commerce platform operating in Pakistan, UAE, and Europe.",
    tools: ["Illustrator", "Photoshop", "Canva"],
    client: "Redkoar",
  },
  {
    id: "2",
    title: "Be Masculine Channel Branding",
    category: "video",
    image:
      "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756359854/Untitled_design_5_aekv1g.png",
    description:
      "YouTube channel branding including logo, thumbnails, and video editing for a motivation and discipline focused channel.",
    tools: ["Canva", "CapCut", "Illustrator"],
    client: "Be Masculine",
  },
  {
    id: "3",
    title: "Product Photography Retouching",
    category: "image",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    description:
      "Professional product photo retouching for e-commerce listings with color correction and background removal.",
    tools: ["Photoshop", "Lightroom"],
  },
  {
    id: "4",
    title: "Corporate Event Poster",
    category: "digital",
    image:
      "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756360064/Illustration_cvizrl.webp",
    description:
      "Digital poster design for corporate tech conference with modern aesthetic and information hierarchy.",
    tools: ["Illustrator", "Photoshop"],
    client: "TechSummit 2023",
  },
  {
    id: "5",
    title: "Fashion Brand Logo",
    category: "logo",
    image:
      "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756360064/Logo_y6qvhr.jpg",
    description:
      "Minimalist logo design for an upcoming fashion brand focusing on sustainable clothing.",
    tools: ["Illustrator", "Photoshop"],
    client: "EcoThreads",
  },
  {
    id: "6",
    title: "Promotional Video Editing",
    category: "video",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    description:
      "Short promotional video editing for social media campaign with dynamic transitions and effects.",
    tools: ["CapCut", "After Effects", "Premiere Pro"],
  },
  {
    id: "7",
    title: "Portrait Retouching",
    category: "image",
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=800&q=80",
    description:
      "Professional portrait retouching with natural skin texture preservation and color enhancement.",
    tools: ["Photoshop", "Lightroom"],
  },
  {
    id: "8",
    title: "Social Media Campaign",
    category: "digital",
    image:
      "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756360064/Social_media_aybmqt.webp",
    description:
      "Cohesive social media campaign design with multiple formats for Instagram, Facebook, and Twitter.",
    tools: ["Photoshop", "Illustrator", "Canva"],
    client: "Wellness Collective",
  },
  {
    id: "9",
    title: "Restaurant Menu Design",
    category: "digital",
    image:
      "https://images.unsplash.com/photo-1590341328520-63256eb32bc3?w=800&q=80",
    description:
      "Modern restaurant menu design with custom food photography and elegant typography.",
    tools: ["InDesign", "Photoshop"],
    client: "Fusion Kitchen",
  },
  {
    id: "10",
    title: "Spotbook Logo Design",
    category: "logo",
    image:
      "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756360789/spotbook_1_oip5et.webp",
    description:
      "Modern logo design for Spotbook, a celebration and event booking platform with elegant branding.",
    tools: ["Illustrator", "Photoshop"],
    client: "Spotbook",
  },
  {
    id: "11",
    title: "Spotbook Brand Variations",
    category: "logo",
    image:
      "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756360789/spotbook_2_blzfqc.jpg",
    description:
      "Alternative logo variations and brand elements for Spotbook's comprehensive brand identity system.",
    tools: ["Illustrator", "Photoshop"],
    client: "Spotbook",
  },
  {
    id: "12",
    title: "Spotbook Premium Logo",
    category: "logo",
    image:
      "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756360789/spotbook_3_psj0gm.jpg",
    description:
      "Premium metallic logo design for Spotbook's luxury event services and high-end branding materials.",
    tools: ["Illustrator", "Photoshop"],
    client: "Spotbook",
  },
  {
    id: "13",
    title: "Spotbook Corporate Identity",
    category: "logo",
    image:
      "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756360790/spotbook4_fswojl.jpg",
    description:
      "Corporate identity design for Spotbook featuring modern gradient aesthetics and professional branding.",
    tools: ["Illustrator", "Photoshop"],
    client: "Spotbook",
  },
  {
    id: "16",
    title: "Image 1",
    category: "image",
    image:
      "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756359843/Image_1_xgpnth.png",
    description: "Image editing sample.",
    tools: ["Photoshop", "Lightroom"],
  },
  {
    id: "17",
    title: "Image 2",
    category: "image",
    image:
      "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756359843/Image_1_xgpnth.png",
    description: "Image editing sample.",
    tools: ["Photoshop", "Lightroom"],
  },
  {
    id: "18",
    title: "Image 4",
    category: "image",
    image:
      "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756359857/img_4_bwwojj.png",
    description: "Image editing sample.",
    tools: ["Photoshop", "Lightroom"],
  },
  {
    id: "19",
    title: "Image 5",
    category: "image",
    image:
      "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756359851/img_5_b20n3g.png",
    description: "Image editing sample.",
    tools: ["Photoshop", "Lightroom"],
  },
  {
    id: "20",
    title: "Image 6",
    category: "image",
    image:
      "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756359853/img_6_bnrntq.png",
    description: "Image editing sample.",
    tools: ["Photoshop", "Lightroom"],
  },
  {
    id: "21",
    title: "Image 7",
    category: "image",
    image:
      "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756359853/img_7_uykgow.png",
    description: "Image editing sample.",
    tools: ["Photoshop", "Lightroom"],
  },
  {
    id: "22",
    title: "Image 8",
    category: "image",
    image:
      "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756359853/img_8_u3cgop.png",
    description: "Image editing sample.",
    tools: ["Photoshop", "Lightroom"],
  },
  {
    id: "23",
    title: "Image 9",
    category: "image",
    image:
      "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756359856/img_9_bqkyks.png",
    description: "Image editing sample.",
    tools: ["Photoshop", "Lightroom"],
  },
  {
    id: "24",
    title: "Creative Color Brushstroke Lettering Logo",
    category: "logo",
    image:
      "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756359820/Creative_Color_Brushstroke_Lettering_Logo_ieg1wm.png",
    description: "Colorful brushstroke lettering logo.",
    tools: ["Illustrator", "Photoshop"],
  },
  {
    id: "25",
    title: "Video Editing Project 1",
    category: "video",
    image:
      "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756360122/video_1_ge3dqt.png",
    description: "Video editing showcase.",
    tools: ["CapCut", "Premiere Pro"],
  },
  {
    id: "26",
    title: "Video Editing Project 2",
    category: "video",
    image:
      "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756360123/video_2_gsdltn.png",
    description: "Video editing showcase.",
    tools: ["CapCut", "Premiere Pro"],
  },
  {
    id: "27",
    title: "Video Editing Project 3",
    category: "video",
    image:
      "https://res.cloudinary.com/dv5kwhrj9/image/upload/v1756360123/video_3_tlj4vu.png",
    description: "Video editing showcase.",
    tools: ["CapCut", "Premiere Pro"],
  },
];

export default PortfolioGrid;
