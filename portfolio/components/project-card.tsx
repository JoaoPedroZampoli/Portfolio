"use client";

import { Card, CardBody, Button, Chip } from "@heroui/react";
import { motion } from "framer-motion";
import { Project } from "@/types/project";
import { Github, ExternalLink, Calendar, Star, Code } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.05,
        ease: [0.21, 1.11, 0.81, 0.99]
      }
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'short'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      university: "bg-blue-500",
      personal: "bg-emerald-500", 
      bootcamp: "bg-orange-500",
      portfolio: "bg-purple-500",
      game: "bg-red-500",
      web: "bg-cyan-500",
      "data-science": "bg-indigo-500",
      "competitive-programming": "bg-yellow-500"
    };
    return colors[category] || "bg-gray-500";
  };

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, string> = {
      university: "🎓",
      personal: "💡",
      bootcamp: "🚀",
      portfolio: "💼",
      game: "🎮",
      web: "🌐",
      "data-science": "📊",
      "competitive-programming": "🏆"
    };
    return icons[category] || "📁";
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group h-full"
    >
      <Card 
        className="h-full bg-background/60 backdrop-blur-xl border border-divider/20 hover:border-divider/40 transition-all duration-300 hover:shadow-lg overflow-hidden"
        isPressable
      >
        <CardBody className="p-0 h-full flex flex-col">
          {/* Header Strip */}
          <div className={`h-1 ${getCategoryColor(project.category)}`} />
          
          <div className="p-6 flex-1 flex flex-col">
            {/* Top Section */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-lg">{getCategoryIcon(project.category)}</span>
                <span className="text-xs font-medium text-default-500 uppercase tracking-wider">
                  {project.category.replace('-', ' ')}
                </span>
              </div>
              
              {project.featured && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                </motion.div>
              )}
            </div>

            {/* Project Title */}
            <div className="mb-3">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                {project.name}
              </h3>
            </div>

            {/* Description */}
            <p className="text-sm text-default-600 line-clamp-3 mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.technologies?.slice(0, 4).map((tech) => (
                <Chip
                  key={tech}
                  size="sm"
                  variant="flat"
                  className="text-xs bg-default-100/70 text-default-700 hover:bg-default-200/70 transition-colors"
                >
                  {tech}
                </Chip>
              ))}
              {project.technologies && project.technologies.length > 4 && (
                <Chip
                  size="sm"
                  variant="flat"
                  className="text-xs bg-default-100/50 text-default-500"
                >
                  +{project.technologies.length - 4}
                </Chip>
              )}
            </div>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Stats Section */}
            <div className="flex items-center justify-between mb-4 pt-4 border-t border-divider/20">
              <div className="flex items-center gap-4 text-xs text-default-500">
                {project.stars !== undefined && project.stars > 0 && (
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    <span>{project.stars}</span>
                  </div>
                )}
                {project.language && (
                  <div className="flex items-center gap-1">
                    <Code className="w-3 h-3" />
                    <span>{project.language}</span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{formatDate(project.updatedAt)}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button
                as="a"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                variant="ghost"
                className="flex-1 text-xs"
                startContent={<Github className="w-3 h-3" />}
              >
                Code
              </Button>
              
              {project.liveUrl && (
                <Button
                  as="a"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  color="primary"
                  variant="flat"
                  className="flex-1 text-xs"
                  startContent={<ExternalLink className="w-3 h-3" />}
                >
                  Live
                </Button>
              )}
            </div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};