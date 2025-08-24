"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Download,
  FileText,
  Mail,
  Phone,
  MapPin,
  Calendar,
  User,
  GraduationCap,
  Briefcase,
  Code,
  Award,
  Globe,
  Target,
  Layers,
  Package,
  Database,
  Monitor,
  Bot,
  File,
} from "lucide-react"
import PageTransition from "@/components/page-transition"
import { useRef } from "react"

// CV Data based on your resume
const cvData = {
  personal: {
    name: "Rohit",
    title: "Full Stack Web Developer",
    email: "rohitpippale7989@gmail.com",
    phone: "8532946022",
    location: "Agra, India",
    fatherName: "Mr. Haribaboo",
    nationality: "Indian",
    gender: "Male",
    languages: ["English", "Hindi"],
    hobbies: ["Listening to Music"],
    areaOfInterest: "Web Development",
  },
  about:
    "🚀 **4+ Years Experienced** Full Stack Web Developer specializing in advanced Laravel development and modern web technologies. Expert in developing complex web applications with sophisticated authentication systems, RESTful APIs, and cutting-edge AI integrations. Proven track record of solving complex logical challenges and delivering high-quality, scalable solutions that drive business growth. Passionate about creating efficient, user-friendly applications with exceptional performance and user experience.",
  experience: [
    {
      title: "Full Stack Web Developer",
      company: "Digiinteracts",
      location: "Vijay Nagar Phase 2, Rohini Sector 4, New Delhi",
      period: "April 31, 2022 - Present",
      description:
        "Working as a senior developer handling complex web applications and implementing advanced features across various client projects.",
      achievements: [
        "Developed sophisticated authentication systems and complex login workflows",
        "Integrated AI solutions including ChatGPT, Gemini, and Perplexity assistants",
        "Created and maintained RESTful APIs for multiple client applications",
        "Optimized database queries and application performance for high-traffic websites",
        "Mentored junior developers and led technical implementation for key projects",
      ],
    },
    {
      title: "Web Developer",
      company: "MS Digital Marketing Agency",
      period: "November 2021 - February 2022",
      description:
        "Developed and maintained multiple web applications and websites for clients across various industries.",
      achievements: [
        "Built responsive websites using modern web technologies",
        "Collaborated with design team to implement user-friendly interfaces",
        "Optimized website performance and SEO",
      ],
    },
    {
      title: "Web Developer",
      company: "Amsoft",
      period: "August 2020 - January 2021",
      description: "Worked on various web development projects and gained experience in full-stack development.",
      achievements: [
        "Developed custom web applications using PHP and MySQL",
        "Implemented responsive design principles",
        "Maintained and updated existing client websites",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Dr. Bhimrao Ambedkar University, Agra",
      college: "M.B.D College Shastripuram, Agra",
      year: "2019",
      score: "",
    },
    {
      degree: "12th Grade (Intermediate)",
      institution: "Gyan Singh Inter College, Agra",
      year: "2016",
      score: "58%",
    },
    {
      degree: "10th Grade (High School)",
      institution: "Gyan Singh Inter College, Agra",
      year: "2014",
      score: "72%",
    },
  ],
  skills: {
    programming: ["PHP (Advanced)", "JavaScript (Advanced)", "jQuery", "Laravel (Advanced)"],
    web: ["HTML5", "CSS3", "Bootstrap", "AJAX", "JSON", "REST API"],
    database: ["MySQL", "MongoDB", "SQLite"],
    os: ["Windows", "Linux"],
    tools: ["Git", "GitHub", "VS Code", "Postman"],
    aiTools: ["ChatGPT Integration", "Gemini API", "Perplexity AI", "AI Assistant Development"],
    jsPlugins: ["DataTables", "Select2", "Chart.js", "SweetAlert2", "jQuery UI"],
  },
  projects: [
    {
      name: "thecompellingimage.com",
      type: "E-learning Platform",
      description: "Educational platform where users can purchase photography courses",
    },
    {
      name: "pluckit.com",
      type: "Service Marketplace",
      description: "Platform connecting service providers with customers",
    },
    {
      name: "masterymade.com",
      type: "AI Education Platform",
      description: "Educational platform with ChatGPT API integration for AI-powered learning",
    },
    {
      name: "defineclasses.com",
      type: "Educational Portal",
      description: "Online learning management system for educational institutions",
    },
    {
      name: "alcasolutions.in",
      type: "Business Website",
      description: "Corporate website for business solutions company",
    },
    {
      name: "birthdeathonline.in",
      type: "Government Portal",
      description: "Digital certificate management system for government services",
    },
    {
      name: "bundelkhandfarmproducts.com",
      type: "E-commerce",
      description:
        "Indian food brand selling A2 Cow Ghee, Lal Gehu, and other farm products directly from farms to consumers",
    },
    {
      name: "srcinternationalschool.co.in",
      type: "School Website",
      description: "Official website for SRC International School",
    },
    {
      name: "hopeindia.biz",
      type: "NGO Website",
      description: "Website for non-profit organization",
    },
    {
      name: "wwec.in",
      type: "School Website",
      description: "Educational institution website for school management",
    },
    {
      name: "flydigitally.in",
      type: "Digital Agency",
      description: "Website for digital marketing agency services",
    },
    {
      name: "msdigitalmarketingagency.com",
      type: "Marketing Agency",
      description: "Digital marketing services company website",
    },
  ],
  strengths: [
    "Advanced Laravel development",
    "Complex problem-solving skills",
    "REST API development",
    "AI integration expertise",
    "Database optimization",
    "Excellent communication skills",
  ],
}




export default function CVPage() {
  const cvRef = useRef<HTMLDivElement>(null)
  return (
    <PageTransition>
      {/* Fixed Download Buttons - Top */}
      <div className="sticky top-16 z-30 bg-background/80 backdrop-blur-sm border-b py-3">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <Button
                asChild
                className="bg-black text-white hover:bg-gray-800 flex items-center gap-2"
                size="sm"
              >
                <a href="/cv/cv.pdf" download="Rohit_CV.pdf">
                  <Download className="h-4 w-4" />
                  PDF
                </a>
              </Button>
              <Button
                asChild
                className="bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2"
                size="sm"
              >
                <a href="/cv/cv.docx" download="Rohit_CV.docx">
                  <FileText className="h-4 w-4" />
                  DOCX
                </a>
              </Button>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>

      {/* CV Document Container */}
      <div className="min-h-screen bg-muted/30 py-8">
        <div className="container max-w-4xl mx-auto px-4">
          {/* CV Document */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Card ref={cvRef} className="cv-document bg-white shadow-2xl border-0 overflow-hidden">
              <CardContent className="p-0">
                {/* Header Section */}
                <motion.div
                  className="bg-gradient-to-r from-primary to-purple-600 text-white p-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="text-center">
                    <motion.h1
                      className="text-4xl md:text-5xl font-bold mb-2"
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {cvData.personal.name}
                    </motion.h1>
                    <motion.p
                      className="text-xl md:text-2xl text-primary-foreground/90 mb-6"
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      {cvData.personal.title}
                    </motion.p>
                    <motion.div
                      className="flex flex-wrap justify-center gap-6 text-sm"
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        {cvData.personal.email}
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        {cvData.personal.phone}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {cvData.personal.location}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Document Content */}
                <div className="p-8 space-y-8">
                  {/* About Section */}
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-primary border-b-2 border-primary/20 pb-2">
                      <User className="h-6 w-6" />
                      About Myself
                    </h2>
                    <div
                      className="text-muted-foreground leading-relaxed text-justify"
                      dangerouslySetInnerHTML={{
                        __html: cvData.about.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>"),
                      }}
                    />
                  </motion.section>

                  {/* Experience Section */}
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-primary border-b-2 border-primary/20 pb-2">
                      <Briefcase className="h-6 w-6" />
                      Professional Experience
                    </h2>
                    <div className="space-y-6">
                      {cvData.experience.map((exp, index) => (
                        <motion.div
                          key={index}
                          className="border-l-4 border-primary/30 pl-6 relative"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + index * 0.1 }}
                        >
                          <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                          <h3 className="text-xl font-semibold">{exp.title}</h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                          {exp.location && <p className="text-sm text-muted-foreground">{exp.location}</p>}
                          <p className="text-sm text-muted-foreground mb-3 flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </p>
                          <p className="text-muted-foreground mb-3">{exp.description}</p>
                          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  </motion.section>

                  {/* Education Section */}
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-primary border-b-2 border-primary/20 pb-2">
                      <GraduationCap className="h-6 w-6" />
                      Education
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {cvData.education.map((edu, index) => (
                        <motion.div
                          key={index}
                          className="bg-muted/50 p-4 rounded-lg"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.0 + index * 0.1 }}
                        >
                          <h3 className="font-semibold text-base">{edu.degree}</h3>
                          <p className="text-primary text-sm">{edu.institution}</p>
                          {edu.college && <p className="text-xs text-muted-foreground">{edu.college}</p>}
                          <div className="flex justify-between items-center mt-2">
                            <span className="text-xs text-muted-foreground">Year: {edu.year}</span>
                            {edu.score && (
                              <Badge variant="secondary" className="text-xs">
                                Score: {edu.score}
                              </Badge>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.section>

                  {/* Skills Section */}
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                  >
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-primary border-b-2 border-primary/20 pb-2">
                      <Code className="h-6 w-6" />
                      Technical Skills
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold mb-3 text-base flex items-center gap-2">
                            <Layers className="h-4 w-4 text-primary" />
                            Programming & Frameworks
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {cvData.skills.programming.map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="font-semibold mb-3 text-base flex items-center gap-2">
                            <Globe className="h-4 w-4 text-primary" />
                            Web Technologies
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {cvData.skills.web.map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="font-semibold mb-3 text-base flex items-center gap-2">
                            <Package className="h-4 w-4 text-primary" />
                            JS Plugins & Libraries
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {cvData.skills.jsPlugins.map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold mb-3 text-base flex items-center gap-2">
                            <Bot className="h-4 w-4 text-primary" />
                            AI Integration
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {cvData.skills.aiTools.map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="font-semibold mb-3 text-base flex items-center gap-2">
                            <Database className="h-4 w-4 text-primary" />
                            Databases
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {cvData.skills.database.map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="font-semibold mb-3 text-base flex items-center gap-2">
                            <Monitor className="h-4 w-4 text-primary" />
                            OS & Tools
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {[...cvData.skills.os, ...cvData.skills.tools].map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.section>

                  {/* Projects Section */}
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                  >
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-primary border-b-2 border-primary/20 pb-2">
                      <Globe className="h-6 w-6" />
                      Project Work
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {cvData.projects.map((project, index) => (
                        <motion.div
                          key={index}
                          className="bg-muted/50 p-3 rounded-lg hover:bg-muted/70 transition-colors text-center"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.3 + index * 0.03 }}
                          whileHover={{ y: -2 }}
                          title={project.description}
                        >
                          <h3 className="font-medium text-primary text-sm">{project.name}</h3>
                          <p className="text-xs text-muted-foreground mt-1">{project.type}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.section>

                  {/* Strengths Section */}
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                  >
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-primary border-b-2 border-primary/20 pb-2">
                      <Award className="h-6 w-6" />
                      Key Strengths
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {cvData.strengths.map((strength, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.5 + index * 0.1 }}
                        >
                          <Target className="h-5 w-5 text-primary" />
                          <span className="text-sm font-medium">{strength}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.section>

                  {/* Personal Details Section */}
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 }}
                  >
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-primary border-b-2 border-primary/20 pb-2">
                      <User className="h-6 w-6" />
                      Personal Details
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="font-medium">Father's Name:</span>
                          <span className="text-muted-foreground">{cvData.personal.fatherName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Nationality:</span>
                          <span className="text-muted-foreground">{cvData.personal.nationality}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Gender:</span>
                          <span className="text-muted-foreground">{cvData.personal.gender}</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="font-medium">Languages:</span>
                          <span className="text-muted-foreground">{cvData.personal.languages.join(", ")}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Hobbies:</span>
                          <span className="text-muted-foreground">{cvData.personal.hobbies.join(", ")}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Area of Interest:</span>
                          <span className="text-muted-foreground">{cvData.personal.areaOfInterest}</span>
                        </div>
                      </div>
                    </div>
                  </motion.section>
                </div>

                {/* Footer */}
                <motion.div
                  className="bg-muted/30 p-6 text-center text-sm text-muted-foreground border-t"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.7 }}
                >
                  This CV was generated on {new Date().toLocaleDateString()} • Available for immediate hiring
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

    </PageTransition>
  )
}
