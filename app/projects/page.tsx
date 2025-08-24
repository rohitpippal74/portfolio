"use client"

import type React from "react"

import { motion } from "framer-motion"
import PageTransition from "@/components/page-transition"
import { ProjectCard } from "./components/ProjectCard"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "MasteryMade.com",
      description: "AI-based education platform",
      tags: ["Next.js", "Laravel",'Mysql', "PHP","Bootstrap","jquery"],
      image: "/placeholder.svg?height=300&width=400",
      link: "https://masterymade.com",
    },
    {
      id: 2,
      title: "TheWay.Masterymade.com",
      description: "Influencer Ai Platform",
      tags: ["Python",'Tailwind',"Mysql","Next js"],
      image: "/placeholder.svg?height=300&width=400",
      link: "https://theway.masterymade.com",
    },
    {
      id: 3,
      title: "TheCompellingImage.com",
      description: "E-Learning Platform for Photographers",
      tags: ["Laravel", "PHP", "Mysql","jquery","Bootstrap"],
      image: "/placeholder.svg?height=300&width=400",
      link: "https://thecompellingimage.com",
    },
    {
      id: 4,
      title: "HopeIndia.biz",
      description: "Business/service website",
      tags: ["PHP","Bootstrap",'Mysql'],
      image: "/placeholder.svg?height=300&width=400",
      link: "https://hopeindia.biz",
    },
    {
      id: 5,
      title: "Pluckit.com",
      description: "Service Marketplace",
      tags: ["Laravel", "PHP", "jquery","bootstrap","Mysql"],
      image: "/placeholder.svg?height=300&width=400",
      link: "https://pluckit.com",
    },
    {
      id: 6,
      title: "BirthDeathOnline.in",
      description: "Online portal",
      tags: ["PHP", "MySQL"],
      image: "/placeholder.svg?height=300&width=400",
      link: "https://birthdeathonline.in",
    },
    {
      id: 7,
      title: "Wwec.in",
      description: "Educational/consultancy website",
      tags: ["PHP", "Bootstrap","Mysql"],
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
      tags: ["PHP", "Bootstrap"],
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
      title: "BundelkhandFarmProducts.com",
      description: "Organic Farm Products website",
      tags: ["PHP", "MySQL"],
      image: "/placeholder.svg?height=300&width=400",
      link: "https://bundelkhandfarmproducts.com",
    },
    {
      id: 12,
      title: "SrcInternationalSchool.co.in",
      description: "School website",
      tags: ["PHP","MySQL",'Bootstrap'],
      image: "/placeholder.svg?height=300&width=400",
      link: "https://srcinternationalschool.co.in",
    },
    {
      id: 13,
      title: "DefineClasses.com",
      description: "Education purpose platform",
      tags: ["PHP", "MySQL","Mysql"],
      image: "/placeholder.svg?height=300&width=400",
      link: "https://defineclasses.com",
    },
    {
      id: 14,
      title: "AlcaSolutions.in",
      description: "Business solution platform",
      tags: ["PHP", "MySQL"],
      image: "/placeholder.svg?height=300&width=400",
      link: "https://alcasolutions.in",
    },
    {
      id: 15,
      title: "BnbArts.com",
      description: "Photo purchase website",
      tags: ["Laravel", "PHP", "MySQL","jquery","Bootstrap"],
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


