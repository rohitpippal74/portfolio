"use client"

import type React from "react"
import {
  User,
  MapPin,
  Calendar,
  Award,
  Heart,
  Coffee,
  Music,
  Camera,
  Code,
  Zap,
  Target,
  Trophy,
  Users,
  MessageCircle,
  Briefcase,
  CheckCircle,
  Star,
  Clock,
} from "lucide-react"
import { motion } from "framer-motion"
import PageTransition from "@/components/page-transition"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TypingAnimation, FloatingCode, CodeBlock, TerminalWindow } from "@/components/developer-animations"
import { FreelanceAvailabilityBanner, FreelanceStats, FreelanceCTA } from "@/components/freelance-components"

export default function AboutPage() {
  const codeSnippets = [
    "const freelancer = { passionate: true, available: true };",
    "while(learning) { skills++; experience++; }",
    "function deliverExcellence() { return 'always'; }",
    "const clientSatisfaction = '100%';",
    "import { dedication } from 'work-ethic';",
    "export default QualityService;",
  ]

  return (
    <PageTransition>
      {/* Freelance Availability Banner */}
      <div className="container max-w-7xl mx-auto px-4 pt-4">
        <FreelanceAvailabilityBanner />
      </div>

      {/* Enhanced Hero Section with Freelance Focus */}
      <section className="py-32 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5 relative overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 relative z-10"
          >
            {/* Enhanced Animated Developer Icon with Freelance Elements */}
            <motion.div
              className="w-40 h-40 rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 flex items-center justify-center mx-auto mb-8 border-4 border-primary/30 relative overflow-hidden"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
            >
              <User className="h-20 w-20 text-primary" />

              {/* Floating Freelance Elements around Avatar */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                {[
                  { icon: "💼", label: "Freelance" },
                  { icon: "⚡", label: "Fast" },
                  { icon: "🎯", label: "Quality" },
                  { icon: "🚀", label: "Success" },
                  { icon: "💡", label: "Creative" },
                  { icon: "⭐", label: "5-Star" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-8 h-8 bg-primary/20 rounded-md flex items-center justify-center text-sm"
                    style={{
                      top: `${20 + Math.cos((i * Math.PI * 2) / 6) * 50}%`,
                      left: `${50 + Math.sin((i * Math.PI * 2) / 6) * 50}%`,
                    }}
                    animate={{
                      y: [0, -8, 0],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.3,
                    }}
                    title={item.label}
                  >
                    {item.icon}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              About Me
            </motion.h1>

            <motion.div
              className="w-24 h-1 bg-primary mx-auto mb-8"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />

            <motion.div
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <TypingAnimation
                text="Passionate freelance developer dedicated to creating exceptional digital experiences and building lasting client relationships."
                delay={600}
              />
            </motion.div>

            {/* Freelance Status Display */}
            <motion.div
              className="flex justify-center gap-4 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
            >
              <Badge className="bg-green-100 text-green-800 px-4 py-2 border border-green-200">
                <motion.div
                  className="w-2 h-2 bg-green-500 rounded-full mr-2"
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                Available for Projects
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                <Clock className="w-3 h-3 mr-2" />
                24h Response Time
              </Badge>
            </motion.div>

            {/* Code Snippet Display */}
            <motion.div
              className="font-mono text-lg text-primary/80 bg-gray-900/50 rounded-lg p-4 max-w-lg mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
            >
              <TypingAnimation
                text="const freelancer = { status: 'available', quality: 'premium', dedication: '100%' };"
                delay={1200}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Code Snippets */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {codeSnippets.map((code, i) => (
            <FloatingCode key={i} delay={i * 3}>
              {code}
            </FloatingCode>
          ))}
        </div>

        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 -z-20 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-primary/5 to-purple-500/5"
              style={{
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                scale: [1, Math.random() * 0.5 + 0.8, 1],
                rotate: [0, 180, 360],
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
      </section>

      {/* Freelance Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Freelance Track Record</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Proven results and client satisfaction across diverse projects and industries.
            </p>
          </motion.div>
          <FreelanceStats />
        </div>
      </section>

      {/* Enhanced Main About Content */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start mb-20">
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
                <Briefcase className="h-8 w-8 text-primary" />
                My Freelance Journey
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  I'm a passionate freelance full-stack developer with over 5 years of experience helping businesses and
                  entrepreneurs bring their digital visions to life. My journey in freelance development started when I
                  discovered the incredible satisfaction of working directly with clients to solve their unique
                  challenges.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  What sets me apart as a freelancer is my commitment to understanding not just the technical
                  requirements, but the business goals behind every project. I specialize in React, Next.js, and modern
                  web technologies, always focusing on creating solutions that drive real business value for my clients.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Throughout my freelance career, I've worked with startups launching their first products, established
                  companies modernizing their digital presence, and everything in between. Each project has taught me
                  something new and reinforced my passion for creating exceptional digital experiences.
                </motion.p>

                {/* Freelance Philosophy */}
                <motion.div
                  className="bg-muted/50 rounded-lg p-6 border-l-4 border-primary"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    My Freelance Philosophy
                  </h3>
                  <p className="italic">
                    "Success in freelancing isn't just about delivering code—it's about building relationships,
                    understanding business needs, and creating solutions that make a real impact. Every client deserves
                    not just a developer, but a dedicated partner in their success."
                  </p>
                </motion.div>

                {/* Freelance Approach */}
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-4 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <MessageCircle className="h-4 w-4 text-primary" />
                      Communication First
                    </h4>
                    <p className="text-sm">Clear, regular communication throughout every project phase.</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Target className="h-4 w-4 text-green-600" />
                      Results Focused
                    </h4>
                    <p className="text-sm">Every line of code serves a purpose and drives business value.</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Quick Facts Card */}
              <div className="bg-muted/50 rounded-2xl p-6 border">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Freelancer Profile
                </h3>
                <div className="space-y-4">
                  <FactItem label="Full Name" value="Your Full Name" />
                  <FactItem label="Email" value="your.email@example.com" />
                  <FactItem label="Location" value="Your City, Country" icon={<MapPin className="h-4 w-4" />} />
                  <FactItem label="Experience" value="5+ Years Freelancing" />
                  <FactItem label="Specialization" value="Full-Stack Development" />
                  <FactItem label="Response Time" value="Within 24 hours" icon={<Clock className="h-4 w-4" />} />
                  <FactItem
                    label="Availability"
                    value={
                      <Badge className="bg-green-100 text-green-800">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Available for Projects
                      </Badge>
                    }
                  />
                </div>
              </div>

              {/* Terminal Window */}
              <TerminalWindow />

              {/* Freelance Achievement Stats */}
              <div className="grid grid-cols-2 gap-4">
                <AchievementCard number="50+" label="Projects" icon={<Target className="h-5 w-5" />} />
                <AchievementCard number="30+" label="Clients" icon={<Users className="h-5 w-5" />} />
                <AchievementCard number="5+" label="Years" icon={<Calendar className="h-5 w-5" />} />
                <AchievementCard number="100%" label="Satisfaction" icon={<Trophy className="h-5 w-5" />} />
              </div>

              {/* Client Satisfaction */}
              <div className="p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="font-semibold">Client Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">5.0/5.0 (30+ reviews)</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Experience Timeline with Freelance Focus */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Freelance Journey</h2>
            <motion.div
              className="w-24 h-1 bg-primary mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My evolution as a freelance developer, key milestones, and the technologies I've mastered.
            </p>
          </motion.div>

          <div className="space-y-12">
            <TimelineItem
              year="2023 - Present"
              title="Senior Freelance Developer"
              company="Independent Contractor"
              description="Providing premium freelance development services to clients worldwide. Specializing in React, Next.js, and full-stack solutions for businesses of all sizes."
              achievements={[
                "Completed 25+ freelance projects",
                "Maintained 100% client satisfaction",
                "Built long-term client relationships",
                "Expanded service offerings to include consulting",
              ]}
              technologies={["Next.js", "TypeScript", "React", "Node.js", "AWS"]}
              delay={0.2}
            />
            <TimelineItem
              year="2020 - 2023"
              title="Full-Stack Freelancer"
              company="Freelance Platforms & Direct Clients"
              description="Transitioned to full-time freelancing, working with diverse clients across multiple industries. Developed expertise in client communication and project management."
              achievements={[
                "Delivered 20+ successful projects",
                "Achieved top-rated freelancer status",
                "Built reputation for quality and reliability",
                "Developed efficient project workflows",
              ]}
              technologies={["React", "Vue.js", "JavaScript", "PHP", "MySQL"]}
              delay={0.4}
            />
            <TimelineItem
              year="2018 - 2020"
              title="Part-time Freelancer"
              company="Side Projects & Small Clients"
              description="Started freelancing part-time while employed full-time. Learned the fundamentals of client relations, project scoping, and freelance business management."
              achievements={[
                "Completed first 10 freelance projects",
                "Learned client communication skills",
                "Developed pricing strategies",
                "Built initial portfolio",
              ]}
              technologies={["HTML", "CSS", "JavaScript", "WordPress", "jQuery"]}
              delay={0.6}
            />
            <TimelineItem
              year="2016 - 2018"
              title="Computer Science Student"
              company="University of Technology"
              description="Studied computer science fundamentals while taking on small web development projects. Built the technical foundation for my future freelance career."
              achievements={[
                "Graduated with honors",
                "Built first commercial websites",
                "Won university coding competitions",
                "Developed entrepreneurial mindset",
              ]}
              technologies={["Java", "Python", "C++", "Web Development"]}
              delay={0.8}
            />
          </div>
        </div>
      </section>

      {/* Enhanced Skills & Values Section */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Freelance Values */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Heart className="h-6 w-6 text-red-500" />
                Freelance Values & Principles
              </h2>
              <div className="space-y-6">
                <ValueCard
                  icon={<Award className="h-6 w-6" />}
                  title="Quality Above All"
                  description="Every project receives the same level of attention and quality, regardless of size. I believe in delivering work that exceeds expectations and stands the test of time."
                />
                <ValueCard
                  icon={<MessageCircle className="h-6 w-6" />}
                  title="Transparent Communication"
                  description="Clear, honest communication is the foundation of successful freelance relationships. I keep clients informed every step of the way."
                />
                <ValueCard
                  icon={<Clock className="h-6 w-6" />}
                  title="Reliable & Timely"
                  description="Deadlines are sacred. I plan meticulously and communicate proactively to ensure projects are delivered on time, every time."
                />
                <ValueCard
                  icon={<Zap className="h-6 w-6" />}
                  title="Continuous Innovation"
                  description="The tech world evolves rapidly. I stay current with the latest technologies and best practices to provide cutting-edge solutions."
                />
              </div>
            </motion.div>

            {/* Interests & Freelance Life */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Coffee className="h-6 w-6 text-amber-600" />
                Life as a Freelancer
              </h2>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <InterestCard icon={<Camera className="h-8 w-8" />} title="Photography" />
                <InterestCard icon={<Music className="h-8 w-8" />} title="Music Production" />
                <InterestCard icon={<Coffee className="h-8 w-8" />} title="Coffee Brewing" />
                <InterestCard icon={<Code className="h-8 w-8" />} title="Open Source" />
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-muted/50 rounded-lg border">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-yellow-500" />
                    Freelance Achievements
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Top-rated freelancer on multiple platforms
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      100% project completion rate
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Featured in freelance success stories
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Built a global client base across 15+ countries
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Mentored 10+ aspiring freelance developers
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Contributed to 20+ open source projects
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-lg border">
                  <h3 className="text-xl font-semibold mb-4">Current Focus Areas</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>React & Next.js Mastery</span>
                      <Badge variant="outline">Expert Level</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>AI Integration in Web Apps</span>
                      <Badge variant="outline">Learning</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Web3 & Blockchain</span>
                      <Badge variant="outline">Exploring</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Mobile Development</span>
                      <Badge variant="outline">Expanding</Badge>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-lg border">
                  <h3 className="text-xl font-semibold mb-4">Why Choose Me as Your Freelancer?</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      5+ years of proven freelance experience
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      100% client satisfaction rate
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Fast response time (within 24 hours)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Transparent pricing and communication
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Post-launch support and maintenance
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Freelance CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4">
          <FreelanceCTA />
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-20 relative overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Work Together?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how my freelance expertise can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" asChild className="group">
                  <Link href="/contact">
                    <MessageCircle className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    Start Your Project
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" asChild className="group">
                  <Link href="/projects">
                    <Code className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    View My Work
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Background Code Animation */}
        <div className="absolute inset-0 -z-10 opacity-5">
          <CodeBlock
            code={`class FreelanceDeveloper {
  constructor() {
    this.name = 'Your Name';
    this.experience = '5+ years';
    this.specialization = 'Full-Stack Development';
    this.clientSatisfaction = '100%';
    this.availability = 'Open for projects';
  }
  
  deliverProject(requirements) {
    const solution = this.analyze(requirements)
      .design()
      .develop()
      .test()
      .deploy();
    
    return {
      quality: 'Premium',
      timeline: 'On-time',
      support: 'Ongoing',
      satisfaction: 'Guaranteed'
    };
  }
}`}
            language="javascript"
          />
        </div>
      </section>
    </PageTransition>
  )
}

function FactItem({ label, value, icon }: { label: string; value: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <motion.div
      className="flex justify-between items-center py-3 border-b border-border/50"
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <span className="font-semibold">{label}:</span>
      <span className="text-muted-foreground flex items-center gap-1">
        {icon}
        {value}
      </span>
    </motion.div>
  )
}

function AchievementCard({ number, label, icon }: { number: string; label: string; icon: React.ReactNode }) {
  return (
    <motion.div
      className="p-4 bg-muted/50 rounded-lg text-center hover:bg-muted transition-colors group"
      whileHover={{ y: -5, scale: 1.05 }}
    >
      <div className="text-primary mb-2 flex justify-center group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="text-2xl font-bold text-primary">{number}</h3>
      <p className="text-sm text-muted-foreground">{label}</p>
    </motion.div>
  )
}

function TimelineItem({
  year,
  title,
  company,
  description,
  achievements,
  technologies,
  delay,
}: {
  year: string
  title: string
  company: string
  description: string
  achievements: string[]
  technologies: string[]
  delay: number
}) {
  return (
    <motion.div
      className="flex flex-col md:flex-row gap-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
    >
      <div className="md:w-1/4">
        <motion.div
          className="flex items-center gap-2 text-lg font-bold text-primary sticky top-24"
          whileHover={{ x: 5 }}
        >
          <Calendar className="h-5 w-5" />
          {year}
        </motion.div>
      </div>
      <div className="md:w-3/4">
        <motion.div
          className="bg-muted/50 p-6 rounded-lg border relative group"
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-primary font-semibold mb-3">{company}</p>
          <p className="text-muted-foreground mb-4">{description}</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <div>
              <h4 className="font-semibold text-sm mb-2">Key Achievements:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div className="flex gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group" whileHover={{ x: 5 }}>
      <div className="text-primary mt-1 group-hover:scale-110 transition-transform">{icon}</div>
      <div>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </motion.div>
  )
}

function InterestCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <motion.div
      className="p-4 bg-muted/50 rounded-lg text-center hover:bg-muted transition-colors group"
      whileHover={{ y: -5, scale: 1.05 }}
    >
      <div className="text-primary mb-2 flex justify-center group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="font-semibold text-sm">{title}</h3>
    </motion.div>
  )
}
