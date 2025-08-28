import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface ProjectModalProps {
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  project?: Project;
  onPrevious?: () => void;
  onNext?: () => void;
  hasPrevious?: boolean;
  hasNext?: boolean;
}

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  client?: string;
  date?: string;
  tools: string[];
  images: string[];
  beforeAfter?: { before: string; after: string }[];
}

const ProjectModal = ({
  isOpen = true,
  onOpenChange,
  project = {
    id: "1",
    title: "Redkoar Brand Identity",
    category: "Logo Design",
    description:
      "Developed full branding and identity for Redkoar, an online e-commerce platform operating in Pakistan, UAE, and Europe. Created brand name, logo, product pictures, and more.",
    client: "Redkoar E-commerce",
    date: "2023",
    tools: ["Photoshop", "Illustrator", "Canva"],
    images: [
      "https://images.unsplash.com/photo-1636633762833-5d1658f1e29b?w=800&q=80",
      "https://images.unsplash.com/photo-1636633762833-5d1658f1e29b?w=800&q=80",
    ],
    beforeAfter: [
      {
        before:
          "https://images.unsplash.com/photo-1636633762833-5d1658f1e29b?w=800&q=80",
        after:
          "https://images.unsplash.com/photo-1636633762833-5d1658f1e29b?w=800&q=80",
      },
    ],
  },
  onPrevious,
  onNext,
  hasPrevious = true,
  hasNext = true,
}: ProjectModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showBeforeAfter, setShowBeforeAfter] = useState(false);

  const handlePreviousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (currentImageIndex < (project?.images.length || 0) - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const toggleBeforeAfter = () => {
    setShowBeforeAfter(!showBeforeAfter);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto p-0">
        <DialogClose className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-1 shadow-md hover:bg-white">
          <X className="h-5 w-5" />
        </DialogClose>

        <div className="relative bg-black/5 h-[400px] overflow-hidden">
          {showBeforeAfter && project.beforeAfter ? (
            <div className="flex h-full">
              <div className="w-1/2 h-full relative">
                <img
                  src={project.beforeAfter[0].before}
                  alt="Before"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  Before
                </div>
              </div>
              <div className="w-1/2 h-full relative">
                <img
                  src={project.beforeAfter[0].after}
                  alt="After"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  After
                </div>
              </div>
            </div>
          ) : (
            <img
              src={project.images[currentImageIndex]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          )}

          {/* Image navigation */}
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="bg-white/90 hover:bg-white rounded-full"
              onClick={handlePreviousImage}
              disabled={currentImageIndex === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-white/90 hover:bg-white rounded-full"
              onClick={handleNextImage}
              disabled={currentImageIndex === (project?.images.length || 0) - 1}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Before/After toggle */}
          {project.beforeAfter && project.beforeAfter.length > 0 && (
            <Button
              variant="outline"
              size="sm"
              className="absolute bottom-4 left-4 bg-white/90 hover:bg-white text-xs"
              onClick={toggleBeforeAfter}
            >
              {showBeforeAfter ? "View Normal" : "View Before/After"}
            </Button>
          )}
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <DialogTitle className="text-2xl font-bold">
                {project.title}
              </DialogTitle>
              <Badge
                variant="outline"
                className="mt-1 bg-[#FFD43B] text-[#1E1E1E] border-none"
              >
                {project.category}
              </Badge>
            </div>
            <div className="text-sm text-gray-500">
              {project.client && (
                <div>
                  <span className="font-medium">Client:</span> {project.client}
                </div>
              )}
              {project.date && (
                <div>
                  <span className="font-medium">Year:</span> {project.date}
                </div>
              )}
            </div>
          </div>

          <DialogDescription className="text-base text-gray-700 mb-4">
            {project.description}
          </DialogDescription>

          <div className="mb-6">
            <h4 className="text-sm font-medium mb-2">Tools Used:</h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, index) => (
                <Badge key={index} variant="secondary" className="bg-gray-100">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>

          <Separator className="my-4" />

          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={onPrevious}
              disabled={!hasPrevious}
              className="flex items-center gap-1"
            >
              <ChevronLeft className="h-4 w-4" /> Previous
            </Button>
            <Button
              variant="outline"
              onClick={onNext}
              disabled={!hasNext}
              className="flex items-center gap-1"
            >
              Next <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
