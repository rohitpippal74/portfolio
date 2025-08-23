"use client"

import type React from "react"

import { Github, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import PageTransition from "@/components/page-transition"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description:
        "A full-featured e-commerce platform built with Next.js, featuring product listings, cart functionality, and payment integration.",
      tags: ["Next.js", "React", "Stripe", "Tailwind CSS"],
      image: "/placeholder.svg?height=300&width=400",
      category: "web",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A productivity application that helps users organize tasks, set priorities, and track progress on projects.",
      tags: ["React", "Redux", "Firebase", "Material UI"],
      image: "/placeholder.svg?height=300&width=400",
      category: "app",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills, built with modern web technologies.",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      image: "/placeholder.svg?height=300&width=400",
      category: "web",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A weather application that provides real-time weather data and forecasts for locations worldwide.",
      tags: ["JavaScript", "API Integration", "CSS"],
      image: "/placeholder.svg?height=300&width=400",
      category: "app",
    },
    {
      id: 5,
      title: "Blog Platform",
      description:
        "A content management system allowing users to create, edit, and publish blog posts with rich text editing.",
      tags: ["Next.js", "MongoDB", "Auth.js"],
      image: "/placeholder.svg?height=300&width=400",
      category: "web",
    },
    {
      id: 6,
      title: "Social Media Dashboard",
      description: "An analytics dashboard that tracks and visualizes social media metrics across multiple platforms.",
      tags: ["React", "Chart.js", "API Integration"],
      image: "/placeholder.svg?height=300&width=400",
      category: "dashboard",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <PageTransition>
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              My Projects
            </motion.h1>
            <motion.div
              className="w-20 h-1 bg-primary mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
          </motion.div>

          <motion.div
            className="flex justify-center mb-10 gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <FilterButton active={filter === "all"} onClick={() => setFilter("all")}>
              All Projects
            </FilterButton>
            <FilterButton active={filter === "web"} onClick={() => setFilter("web")}>
              Web
            </FilterButton>
            <FilterButton active={filter === "app"} onClick={() => setFilter("app")}>
              Apps
            </FilterButton>
            <FilterButton active={filter === "dashboard"} onClick={() => setFilter("dashboard")}>
              Dashboards
            </FilterButton>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
                delay={0.2 * index}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}

function FilterButton({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode
  active: boolean
  onClick: () => void
}) {
  return (
    <motion.button
      className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
        active ? "bg-primary text-white shadow-md" : "bg-muted/50 text-muted-foreground hover:bg-muted"
      }`}
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
    >
      {children}
    </motion.button>
  )
}

function ProjectCard({
  title,
  description,
  tags,
  image,
  delay,
}: {
  title: string
  description: string
  tags: string[]
  image: string
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ y: -10 }}
    >
      <Card className="overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 h-full">
        <motion.div
          className="relative h-56 w-full overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img src={image || "/placeholder.svg"} alt={title} className="object-cover w-full h-full" />
        </motion.div>
        <CardContent className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <p className="text-muted-foreground text-sm flex-1 leading-relaxed mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex gap-3 mt-auto">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
              <Button variant="outline" className="w-full">
                <Github className="h-4 w-4 mr-2" />
                Code
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
              <Button className="w-full">
                <ExternalLink className="h-4 w-4 mr-2" />
                Demo
              </Button>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
