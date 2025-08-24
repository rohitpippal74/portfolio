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
  Globe,
  Book,
  Tv,
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Developer Achievements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Delivering high-quality web solutions and optimized user experiences.
            </p>
          </motion.div>
          <FreelanceStats />
        </div>
      </section>

      {/* Enhanced Main About Content */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start mb-20">
            {/* Left Content */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
                <Briefcase className="h-8 w-8 text-primary" />
                My Journey
              </h2>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                {/* Bio Section */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Hello, my name is <b>Rohit Pippal</b>. I am a passionate{" "}
                  <b>Full Stack Web Developer</b> with more than 5 years of experience in 
                  building scalable, secure, and performance-driven web applications.  
                  My journey in the tech world started early with my academic background.  
                  I completed my <b>10th</b> and <b>12th</b> in the science stream, where I built 
                  my foundation in logical thinking, mathematics, and computer basics.  
                  Later, I pursued my <b>Bachelor of Computer Applications (BCA)</b> from  
                  <b> Dr. Bhimrao Ambedkar University, Agra</b>, which gave me a strong grounding 
                  in programming, databases, and software development.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  After graduation, I started my professional journey at <b>Amsoft</b>, where 
                  I worked on enterprise-level PHP and MySQL projects. Later, I joined  
                  <b> MS Digital Marketing Agency</b>, where I developed marketing solutions and 
                  handled full-stack projects. Since April 2022, I have been working as a  
                  <b>Senior Developer at Digiinteracts</b>, where I manage end-to-end application 
                  development, mentor juniors, and work on high-performance platforms.
                </motion.p>

                {/* Skills */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  My technical expertise includes <b>PHP (5+ years), Laravel (4+ years), 
                  JavaScript (4+ years), MySQL, REST APIs</b>, and integration of modern AI 
                  models such as <b>ChatGPT</b> and <b>Gemini</b>. I follow best practices like 
                  the <b>Laravel MVC architecture</b>, implement <b>Laravel Breeze</b> for authentication, 
                  and <b>Laravel Sanctum</b> for API security. On the frontend, I have solid command 
                  over <b>CSS, Bootstrap, jQuery</b>, and I am continuously learning <b>React & Next.js</b> 
                  to build even more dynamic and modern web applications.
                </motion.p>

                {/* Projects */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  Over my career, I have delivered <b>15+ projects</b> across industries like 
                  <b> Education, Organic Products, Marketing, E-learning, AI-based platforms, 
                  and Service Marketplaces</b>. Some of the highlighted projects include:
                </motion.p>

                {/* Project List */}
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold mb-4">Highlighted Projects</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-muted-foreground">
                    <li>
                      <a
                        href="https://theway.masterymade.com/"
                        className="text-primary font-medium"
                        target="_blank"
                      >
                        TheWay.Masterymade.com
                      </a>{" "}
                      – AI-powered influence & education platform
                    </li>
                    <li>
                      <a
                        href="https://masterymade.com"
                        className="text-primary font-medium"
                        target="_blank"
                      >
                        MasteryMade.com
                      </a>{" "}
                      – AI-based education platform
                    </li>
                    <li>
                      <a
                        href="https://bundelkhandfarmproducts.com"
                        className="text-primary font-medium"
                        target="_blank"
                      >
                        BundelkhandFarmProducts.com
                      </a>{" "}
                      – Organic Farm Products website
                    </li>
                    <li>
                      <a
                        href="https://srcinternationalschool.co.in"
                        className="text-primary font-medium"
                        target="_blank"
                      >
                        SrcInternationalSchool.co.in
                      </a>{" "}
                      – School website
                    </li>
                    <li>
                      <a
                        href="https://thecompellingimage.com"
                        className="text-primary font-medium"
                        target="_blank"
                      >
                        TheCompellingImage.com
                      </a>{" "}
                      – E-learning platform
                    </li>
                    <li>
                      <a
                        href="https://pluckit.com"
                        className="text-primary font-medium"
                        target="_blank"
                      >
                        Pluckit.com
                      </a>{" "}
                      – Service Marketplace
                    </li>
                  </ul>

                  {/* More Projects Button */}
                  <div className="">
                    <Link
                      href="/projects"
                      className="inline-block bg-primary text-white px-5 py-2 rounded-lg shadow hover:bg-primary/90 transition"
                    >
                      View More Projects →
                    </Link>
                  </div>
                </motion.div>

                {/* Work Approach Philosophy */}
                <motion.div
                  className="bg-muted/50 rounded-lg p-6 border-l-4 border-primary mt-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    My Work Philosophy
                  </h3>
                  <p className="italic">
                    "I am not focused heavily on freelancing, but I truly believe in 
                    writing clean code, delivering high-quality solutions, and building 
                    applications that solve real problems. My approach is to understand 
                    client goals deeply, align technology with their vision, and deliver 
                    long-term value. For me, consistency, learning, and discipline are 
                    more important than short-term success."
                  </p>
                </motion.div>

                {/* Work Approach */}
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  <div className="p-4 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <MessageCircle className="h-4 w-4 text-primary" />
                      Communication First
                    </h4>
                    <p className="text-sm">
                      Clear, regular, and transparent communication in every stage of
                      the project lifecycle.
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Target className="h-4 w-4 text-green-600" />
                      Results Focused
                    </h4>
                    <p className="text-sm">
                      Every line of code I write serves a purpose and contributes to
                      achieving the client’s business goals.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Sidebar */}
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
                  Profile
                </h3>
                <div className="space-y-4">
                  <FactItem label="Full Name" value="Rohit Pippal" />
                  <FactItem label="Email" value="rohitpippale7989@example.com" />
                  <FactItem
                    label="Location"
                    value="New Delhi, India"
                    icon={<MapPin className="h-4 w-4" />}
                  />
                  <FactItem label="Qualification" value="BCA" />
                  <FactItem label="Experience" value="5+ Years" />
                  <FactItem label="Specialization" value="Laravel, PHP, Full-Stack" />
                </div>
              </div>

              {/* Strengths Section (instead of photo) */}
              <div className="bg-muted/50 rounded-2xl p-6 border">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  My Strengths
                </h3>
                <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-muted-foreground">
                  <li>Strong problem-solving ability</li>
                  <li>Quick learner of new technologies</li>
                  <li>Dedicated and consistent towards goals</li>
                  <li>Good communication & team collaboration</li>
                  <li>Focus on clean and reusable coding</li>
                  <li>Ability to deliver under deadlines</li>
                </ul>
              </div>

              {/* Terminal Window */}
              <TerminalWindow />

              {/* Achievement Stats */}
              <div className="grid grid-cols-2 gap-4">
                <AchievementCard number="15+" label="Projects" icon={<Target className="h-5 w-5" />} />
                <AchievementCard number="13+" label="Clients" icon={<Users className="h-5 w-5" />} />
                <AchievementCard number="5+" label="Years" icon={<Calendar className="h-5 w-5" />} />
                <AchievementCard number="95%" label="Satisfaction" icon={<Trophy className="h-5 w-5" />} />
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
                  <span className="text-sm text-muted-foreground ml-2">
                    4.3/5.0 (30+ reviews)
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



    {/* Enhanced Skills & Values Section */}
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Professional Values */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Heart className="h-6 w-6 text-red-500" />
              Professional Values & Principles
            </h2>
            <div className="space-y-6">
              <ValueCard
                icon={<Award className="h-6 w-6" />}
                title="Quality Above All"
                description="Every project I work on receives equal attention to detail, ensuring clean, scalable, and secure solutions."
              />
              <ValueCard
                icon={<MessageCircle className="h-6 w-6" />}
                title="Transparent Communication"
                description="I keep project stakeholders updated at every step with clear and honest communication."
              />
              <ValueCard
                icon={<Clock className="h-6 w-6" />}
                title="Reliable & Timely"
                description="I respect deadlines and deliver projects on time with well-planned execution."
              />
              <ValueCard
                icon={<Zap className="h-6 w-6" />}
                title="Continuous Learning"
                description="I consistently upgrade my skills with modern technologies to deliver cutting-edge solutions."
              />
            </div>
          </motion.div>

          {/* Career Life & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-primary" />
              Hobbies & Interests
            </h2>

            {/* Hobbies & Interests - Unique Presentation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {/* Listening Songs */}
              <div className="p-5 rounded-xl border bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:shadow-lg transition">
                <div className="flex items-center gap-3 mb-3">
                  <Music className="h-8 w-8 text-blue-500" />
                  <h3 className="font-semibold text-lg">Listening Songs</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Music keeps me creative and motivated while coding, turning complex problems into smooth flow.
                </p>
              </div>

              {/* Watching Anime */}
              <div className="p-5 rounded-xl border bg-gradient-to-r from-pink-500/10 to-red-500/10 hover:shadow-lg transition">
                <div className="flex items-center gap-3 mb-3">
                  <Tv className="h-8 w-8 text-pink-500" />
                  <h3 className="font-semibold text-lg">Watching Anime</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Anime inspires my imagination, storytelling, and even my approach to problem-solving.
                </p>
              </div>

              {/* Reading Horror History */}
              <div className="p-5 rounded-xl border bg-gradient-to-r from-green-500/10 to-yellow-500/10 hover:shadow-lg transition">
                <div className="flex items-center gap-3 mb-3">
                  <Book className="h-8 w-8 text-green-500" />
                  <h3 className="font-semibold text-lg">Reading Horror History</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Exploring horror history sharpens my curiosity and gives me a deeper appreciation for human psychology and culture.
                </p>
              </div>
            </div>

            {/* Current Focus Areas */}
            <div className="p-6 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Current Focus Areas</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>React & Next.js</span>
                  <Badge variant="outline">Learning</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>AI Integration in Web Apps</span>
                  <Badge variant="outline">Practicing</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>API Security (Sanctum)</span>
                  <Badge variant="outline">Strong</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Performance Optimization</span>
                  <Badge variant="outline">Expert</Badge>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>


      {/* Freelance CTA Section */}
      {/* <section className="py-20 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4">
          <FreelanceCTA />
        </div>
      </section> */}

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
