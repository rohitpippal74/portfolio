"use client"

import type React from "react"

import { Github, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import PageTransition from "@/components/page-transition"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "DefineClasses.com",
      description: "Education purpose platform",
      tags: ["Laravel", "PHP", "MySQL"],
      image: "/placeholder.svg?height=300&width=400",
      link: "https://defineclasses.com",
    },
    {
      id: 2,
      title: "AlcaSolutions.in",
      description: "Business solution platform",
      tags: ["Laravel", "PHP", "MySQL"],
      image: "/placeholder.svg?height=300&width=400",
      link: "https://alcasolutions.in",
    },
    {
      id: 3,
      title: "BirthDeathOnline.in",
      description: "Online portal",
      tags: ["Laravel", "PHP", "MySQL"],
      image: "/placeholder.svg?height=300&width=400",
      link: "https://birthdeathonline.in",
    },
    {
      id: 4,
      title: "BundelkhandFarmProducts.com",
      description: "Organic Farm Products website",
      tags: ["PHP", "Bootstrap", "MySQL"],
      image: "/placeholder.svg?height=300&width=400",
      link: "https://bundelkhandfarmproducts.com",
    },
    {
      id: 5,
      title: "SrcInternationalSchool.co.in",
      description: "School website",
      tags: ["PHP", "Laravel", "MySQL"],
      image: "/placeholder.svg?height=300&width=400",
      link: "https://srcinternationalschool.co.in",
    },
    {
      id: 6,
      title: "HopeIndia.biz",
      description: "Business/service website",
      tags: ["Laravel", "PHP"],
      image: "/placeholder.svg?height=300&width=400",
      link: "https://hopeindia.biz",
    },
    {
      id: 7,
      title: "Wwec.in",
      description: "Educational/consultancy website",
      tags: ["Laravel", "Bootstrap"],
      image: "/placeholder.svg?height=300&width=400",
      link: "https://wwec.in",
    },
    {
      id: 8,
      title: "FlyDigitally.in",
      description: "Digital marketing website",
      tags: ["PHP", "Bootstrap", "MySQL"],
      image: "/placeholder.svg?height=300&width=400",
      link: "https://flydigitally.in",
    },
    {
      id: 9,
      title: "MSDigitalMarketingAgency.com",
      description: "Marketing agency website",
      tags: ["PHP", "Laravel", "Bootstrap"],
      image: "/placeholder.svg?height=300&width=400",
      link: "http://msdigitalmarketingagency.com",
    },
    {
      id: 10,
      title: "MandiOutlet.com",
      description: "Service & Marketplace",
      tags: ["Laravel", "PHP", "Marketplace"],
      image: "/placeholder.svg?height=300&width=400",
      link: "https://mandioutlet.com",
    },
    {
      id: 11,
      title: "TheCompellingImage.com",
      description: "E-learning platform",
      tags: ["Laravel", "PHP", "E-learning"],
      image: "/placeholder.svg?height=300&width=400",
      link: "https://thecompellingimage.com",
    },
    {
      id: 12,
      title: "Pluckit.com",
      description: "Service Marketplace",
      tags: ["Laravel", "PHP", "Marketplace"],
      image: "/placeholder.svg?height=300&width=400",
      link: "https://pluckit.com",
    },
    {
      id: 13,
      title: "MasteryMade.com",
      description: "AI-based education platform",
      tags: ["Next.js", "AI", "Laravel", "PHP"],
      image: "/placeholder.svg?height=300&width=400",
      link: "https://masterymade.com",
    },
    {
      id: 14,
      title: "TheWay.Masterymade.com",
      description: "AI-based education platform",
      tags: ["Next.js", "AI", "Laravel", "PHP"],
      image: "/placeholder.svg?height=300&width=400",
      link: "https://theway.masterymade.com",
    },
    {
      id: 15,
      title: "BnbArts.com",
      description: "Photo purchase website",
      tags: ["Laravel", "PHP", "MySQL"],
      image: "/placeholder.svg?height=300&width=400",
      link: "http://bnbarts.com",
    },
  ]

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
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
                delay={0.2 * index}
                link={project.link}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}

function ProjectCard({
  title,
  description,
  tags,
  image,
  delay,
  link,
}: {
  title: string
  description: string
  tags: string[]
  image: string
  delay: number
  link: string
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
              <Button className="w-full" asChild>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Demo
                </a>
              </Button>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
