"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Twitter,
  User,
  ArrowRight,
  Code,
  Mail,
  Download,
  ExternalLink,
  Zap,
  Target,
  Users,
  Award,
  Coffee,
  MessageCircle,
  Calendar,
  Briefcase,
  FileText,
} from "lucide-react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import PageTransition from "@/components/page-transition"
import {
  TypingAnimation,
  FloatingCode,
  CodeBlock,
  TerminalWindow,
  SkillProgressBar,
} from "@/components/developer-animations"
import {
  FreelanceAvailabilityBanner,
  FreelanceStats,
  FreelanceServices,
  FreelanceProcess,
  FreelanceTestimonials,
  FreelanceCTA,
} from "@/components/freelance-components"
import { useRef } from "react"

export default function Home() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const codeSnippets = [
    "const freelancer = 'available';",
    "function buildAmazingProjects() { return '🚀'; }",
    "npm install success",
    "git commit -m 'Client satisfaction'",
    "const skills = ['React', 'Next.js', 'Freelance'];",
    "while(coding) { quality++; }",
    "import { excellence } from 'work';",
    "export default ProfessionalService;",
  ]

  return (
    <PageTransition>
      {/* Freelance Availability Banner */}
      {/* <div className="container max-w-7xl mx-auto px-4 pt-4">
        <FreelanceAvailabilityBanner />
      </div> */}

      {/* Enhanced Hero Banner Section */}
      <section
        ref={ref}
        className="min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden relative"
      >
        <motion.div style={{ y, opacity }} className="container max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div variants={container} initial="hidden" animate="show" className="space-y-16">
            {/* Enhanced Animated Avatar with Freelance Elements */}
            <motion.div className="relative mx-auto" variants={item}>
              <div className="w-48 h-48 rounded-full bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center mb-8 border-4 border-primary/30 mx-auto relative z-10 overflow-hidden">
                <User className="h-24 w-24 text-primary" />

                {/* Floating Freelance Elements */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  {[
                    { icon: "💼", label: "Freelance" },
                    { icon: "⚡", label: "Fast" },
                    { icon: "🎯", label: "Quality" },
                    { icon: "🚀", label: "Success" },
                    { icon: "💡", label: "Ideas" },
                    { icon: "🔥", label: "Passion" },
                    { icon: "⭐", label: "5-Star" },
                    { icon: "🏆", label: "Pro" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-sm"
                      style={{
                        top: `${20 + Math.cos((i * Math.PI * 2) / 8) * 60}%`,
                        left: `${50 + Math.sin((i * Math.PI * 2) / 8) * 60}%`,
                      }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.2,
                      }}
                      title={item.label}
                    >
                      {item.icon}
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Pulsing Rings */}
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full border-2 border-primary/20"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.3, 0.1, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            </motion.div>

            {/* Enhanced Animated Heading with Freelance Focus */}
            <motion.div variants={item} className="space-y-8">
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Hi, I'm{" "}
                <motion.span
                  className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                >
                  Rohit
                </motion.span>
              </motion.h1>

              <motion.div
                className="text-2xl md:text-4xl font-semibold text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <TypingAnimation text="Full Stack Web Developer | Laravel & PHP Specialist" delay={100} />
              </motion.div>

              {/* Freelance Status Badge */}
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 }}
              >
                <Badge className="bg-green-100 text-green-800 px-6 py-2 text-lg border border-green-200">
                  Laravel Developer | Eloquent ORM & MySQL Optimization Specialist
                </Badge>
              </motion.div>

              {/* Code Snippet Display */}
              <motion.div
                className="font-mono text-lg text-primary/80 bg-gray-900/50 rounded-lg p-4 max-w-md mx-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2 }}
              >
                <TypingAnimation text="const NewProject = { role: 'Laravel', tech: ['Laravel', 'PHP'] };" delay={20} />
              </motion.div>
            </motion.div>

            {/* Enhanced Description */}
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground max-w-[900px] mx-auto leading-relaxed"
              variants={item}
            >
              Specialize in building secure and scalable web applications with Laravel, PHP, and modern technologies, backed by 5 years of experience.
            </motion.p>

            {/* Enhanced Buttons with Freelance Focus */}
            <motion.div className="flex flex-col sm:flex-row gap-6 justify-center" variants={item}>
              <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" className="text-lg px-10 py-6 rounded-full shadow-lg group">
                  <Calendar className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Contact Me
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
                <Link href="/cv">
                  <Button variant="outline" size="lg" className="text-lg px-10 py-6 rounded-full shadow-lg group">
                    <FileText className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    View CV
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Enhanced Social Icons */}
            <motion.div className="flex gap-8 justify-center" variants={item}>
              <motion.a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors relative group"
                whileHover={{ y: -8, scale: 1.3, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="h-8 w-8" />
                <motion.div
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                >
                  GitHub
                </motion.div>
              </motion.a>
              <motion.a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors relative group"
                whileHover={{ y: -8, scale: 1.3, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-8 w-8" />
                <motion.div
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                >
                  LinkedIn
                </motion.div>
              </motion.a>
              <motion.a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors relative group"
                whileHover={{ y: -8, scale: 1.3, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="h-8 w-8" />
                <motion.div
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                >
                  Twitter
                </motion.div>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Floating Code Snippets */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {codeSnippets.map((code, i) => (
            <FloatingCode key={i} delay={i * 2}>
              {code}
            </FloatingCode>
          ))}
        </div>

        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 -z-20 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-primary/5 to-purple-500/5"
              style={{
                width: Math.random() * 400 + 100,
                height: Math.random() * 400 + 100,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 200 - 100],
                y: [0, Math.random() * 200 - 100],
                scale: [1, Math.random() * 0.5 + 0.8, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: Math.random() * 20 + 15,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          whileHover={{ scale: 1.2 }}
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center relative">
            <motion.div
              className="w-1 h-3 bg-primary rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
            <div className="absolute -bottom-8 text-xs text-muted-foreground">Scroll</div>
          </div>
        </motion.div>
      </section>

      {/* Freelance Stats Section */}
      {/* <section className="py-16 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Freelance Excellence</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trusted by clients worldwide for delivering high-quality projects on time and within budget.
            </p>
          </motion.div>
          <FreelanceStats />
        </div>
      </section>  */}

      {/* Enhanced About Preview Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <motion.div
              className="w-24 h-1 bg-primary mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hello, my name is Rohit. I am a Backend and Frontend Developer with 4+ years of
              experience in building scalable and efficient web applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg leading-relaxed">
                Hello, my name is Rohit Pippale. I am a passionate Full Stack Web Developer with more than 5 years of experience in building scalable, secure, and performance-driven web applications. My journey in the tech world started early with my academic background. I completed my 10th and 12th in the science stream, where I built my foundation in logical thinking, mathematics, and computer basics. Later...
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild className="mt-6 group">
                  <Link href="/about">
                    <User className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                    Learn More About Me
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <StatCard number="50+" label="Projects Completed" icon={<Target className="h-6 w-6" />} delay={0.2} />
              <StatCard number="4+" label="Years Experience" icon={<Award className="h-6 w-6" />} delay={0.4} />
              <StatCard number="30+" label="Happy Clients" icon={<Users className="h-6 w-6" />} delay={0.6} />
              <StatCard number="24h" label="Response Time" icon={<Zap className="h-6 w-6" />} delay={0.8} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <TerminalWindow />
            </motion.div>
          </div>
        </div>
      </section>


      {/* Freelance Services Section */}
      {/* <section className="py-24 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Freelance Services</h2>
            <motion.div
              className="w-24 h-1 bg-primary mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional freelance development services tailored to your business needs and budget.
            </p>
          </motion.div>

          <FreelanceServices />
        </div>
      </section> */}

      {/* Freelance Process Section */}
      {/* <section className="py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How I Work</h2>
            <motion.div
              className="w-24 h-1 bg-primary mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My proven 4-step process ensures successful project delivery and client satisfaction.
            </p>
          </motion.div>

          <FreelanceProcess />
        </div>
      </section> */}

      {/* Enhanced Skills Preview Section */}
      <section className="py-24 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical Expertise</h2>
            <motion.div
              className="w-24 h-1 bg-primary mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge technologies and frameworks I use to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-8">Core Technologies</h3>
              <SkillProgressBar skill="Laravel & php" percentage={85} delay={0.2} />
              <SkillProgressBar skill="Database Design" percentage={75} delay={1.0} />
              <SkillProgressBar skill="TypeScript" percentage={60} delay={0.4} />
              <SkillProgressBar skill="UI/UX Design" percentage={50} delay={0.8} />
              <SkillProgressBar skill="React & Next.js" percentage={40} delay={0.2} />
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8">Tools & Frameworks</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["Php", "Laravel", "TypeScript", "Mysql","jquery", "AWS", "Git"].map(
                  (skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -10, scale: 1.05 }}
                    >
                      <Card className="p-4 text-center hover:shadow-lg transition-all duration-300 group">
                        <CardContent className="p-0">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                            <Code className="h-6 w-6 text-primary group-hover:rotate-12 transition-transform" />
                          </div>
                          <h3 className="font-semibold text-sm">{skill}</h3>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ),
                )}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button asChild variant="outline" size="lg" className="group">
              <Link href="/skills">
                <Zap className="mr-2 h-4 w-4 group-hover:text-yellow-500 transition-colors" />
                View All Skills
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Featured Projects Section */}
      <section className="py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
            <motion.div
              className="w-24 h-1 bg-primary mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Recent freelance projects that showcase my expertise and client satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <ProjectPreviewCard
              title="E-commerce Platform"
              description="A full-featured online store with payment integration, admin dashboard, and real-time analytics for a growing retail business."
              image="/placeholder.svg?height=300&width=400"
              tags={["Next.js", "Stripe", "MongoDB", "Tailwind"]}
              github="https://github.com"
              demo="https://demo.com"
              client="RetailCorp"
              delay={0.2}
            />
            <ProjectPreviewCard
              title="SaaS Dashboard"
              description="Collaborative project management tool with real-time updates, team collaboration, and advanced analytics for productivity."
              image="/placeholder.svg?height=300&width=400"
              tags={["React", "Firebase", "Material-UI", "Socket.io"]}
              github="https://github.com"
              demo="https://demo.com"
              client="TechStart"
              delay={0.4}
            />
            <ProjectPreviewCard
              title="Corporate Website"
              description="Modern, responsive corporate website with CMS integration, SEO optimization, and performance enhancements."
              image="/placeholder.svg?height=300&width=400"
              tags={["Next.js", "Framer Motion", "Tailwind", "Sanity"]}
              github="https://github.com"
              demo="https://demo.com"
              client="BusinessCorp"
              delay={0.6}
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button asChild size="lg" className="group">
              <Link href="/projects">
                <Code className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Freelance Testimonials Section */}
      {/* <section className="py-24 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Client Success Stories</h2>
            <motion.div
              className="w-24 h-1 bg-primary mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real feedback from satisfied clients who trusted me with their projects.
            </p>
          </motion.div>

          <FreelanceTestimonials />
        </div>
      </section> */}

      {/* Freelance CTA Section */}
      {/* <section className="py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <FreelanceCTA />
        </div>
      </section> */}

      {/* Enhanced Contact Preview Section */}
      {/* <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Start Your Project</h2>
            <motion.div
              className="w-24 h-1 bg-primary mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <ContactCard
              icon={<Mail className="h-8 w-8" />}
              title="Email Me"
              description="your.email@example.com"
              action="Send Email"
              delay={0.2}
            />
            <ContactCard
              icon={<MessageCircle className="h-8 w-8" />}
              title="Quick Chat"
              description="Available for consultation"
              action="Start Chat"
              delay={0.4}
            />
            <ContactCard
              icon={<Calendar className="h-8 w-8" />}
              title="Schedule Call"
              description="Book a free consultation"
              action="Book Now"
              delay={0.6}
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button asChild size="lg" className="group">
              <Link href="/contact">
                <Coffee className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="absolute inset-0 -z-10 opacity-5">
          <CodeBlock
            code={`class FreelanceDeveloper {
                  constructor() {
                    this.name = 'Rohit';
                    this.status = 'Available';
                    this.expertise = ['React', 'Next.js', 'Full-Stack'];
                    this.commitment = 'Excellence';
                  }
                  
                  startProject(requirements) {
                    return this.expertise
                      .map(skill => skill + this.commitment)
                      .reduce((result, value) => result + value, 'Amazing Results');
                  }
                }`}
            language="javascript"
          />
        </div>
      </section> */}
    </PageTransition>
  )
}

function StatCard({
  number,
  label,
  icon,
  delay,
}: { number: string; label: string; icon: React.ReactNode; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.05 }}
    >
      <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 group border-2 hover:border-primary/20">
        <CardContent className="p-0">
          <div className="text-primary mb-3 group-hover:scale-110 transition-transform">{icon}</div>
          <h3 className="text-3xl font-bold text-primary mb-2">{number}</h3>
          <p className="text-muted-foreground">{label}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function ProjectPreviewCard({
  title,
  description,
  image,
  tags,
  github,
  demo,
  client,
  delay,
}: {
  title: string
  description: string
  image: string
  tags: string[]
  github: string
  demo: string
  client: string
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 group">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
            <motion.a
              href={github}
              className="p-2 bg-white rounded-full text-black hover:bg-gray-200 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a
              href={demo}
              className="p-2 bg-white rounded-full text-black hover:bg-gray-200 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLink className="h-5 w-5" />
            </motion.a>
          </div>
          <Badge className="absolute top-2 right-2 bg-primary/90 text-white">
            <Briefcase className="w-3 h-3 mr-1" />
            {client}
          </Badge>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4 text-sm">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function ContactCard({
  icon,
  title,
  description,
  action,
  delay,
}: { icon: React.ReactNode; title: string; description: string; action: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="text-center group"
    >
      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
        <div className="text-primary group-hover:scale-110 transition-transform">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Button variant="outline" size="sm" className="group-hover:border-primary transition-colors">
        {action}
      </Button>
    </motion.div>
  )
}
