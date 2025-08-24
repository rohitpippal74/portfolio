"use client"
import { motion } from "framer-motion"
import PageTransition from "@/components/page-transition"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SkillsPage() {
  return (
    <PageTransition>
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-4">
          {/* Heading */}
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
              My Skills
            </motion.h1>
            <motion.div
              className="w-20 h-1 bg-primary mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
          </motion.div>

          {/* Skills Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <Tabs defaultValue="frontend" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-10 h-12">
                <TabsTrigger value="frontend" className="text-base">
                  Frontend
                </TabsTrigger>
                <TabsTrigger value="backend" className="text-base">
                  Backend
                </TabsTrigger>
                <TabsTrigger value="tools" className="text-base">
                  Tools & Others
                </TabsTrigger>
              </TabsList>

              {/* Frontend Skills */}
              <TabsContent value="frontend" className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  <SkillCard name="HTML" level="Expert" delay={0.1} />
                  <SkillCard name="CSS" level="Intermediate" delay={0.2} />
                  <SkillCard name="JavaScript" level="Expert" delay={0.3} />
                  <SkillCard name="jquery" level="Expert" delay={0.3} />
                  <SkillCard name="ajax" level="Expert" delay={0.3} />
                  <SkillCard name="React.js" level="Beginner" delay={0.4} />
                  <SkillCard name="Next.js" level="Beginner" delay={0.5} />
                  <SkillCard name="TypeScript" level="Intermediate" delay={0.6} />
                  <SkillCard name="Redux" level="Intermediate" delay={0.8} />
                </div>
              </TabsContent>

              {/* Backend Skills */}
              <TabsContent value="backend" className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  <SkillCard name="Laravel" level="Expert" delay={0.4} />
                  <SkillCard name="php" level="Expert" delay={0.4} />
                  <SkillCard name="REST API" level="Expert" delay={0.6} />
                </div>
              </TabsContent>

              {/* Tools & Others */}
              <TabsContent value="tools" className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  <SkillCard name="Git" level="Intermediate" delay={0.1} />
                  <SkillCard name="GitHub" level="Intermediate" delay={0.2} />
                  <SkillCard name="VS Code" level="Expert" delay={0.3} />
                  <SkillCard name="AWS" level="Beginner" delay={0.8} />
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>

          {/* Expertise Section */}
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-10 text-center">My Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ExpertiseCard
                title="React & Next.js Mastery"
                description="Deep expertise in building scalable and high-performance web applications using React and Next.js."
                delay={0.8}
              />
              <ExpertiseCard
                title="Full-Stack Development"
                description="Designing and developing complete solutions from frontend to backend with modern frameworks."
                delay={0.9}
              />
              <ExpertiseCard
                title="UI/UX Design"
                description="Creating intuitive, accessible, and visually appealing user experiences with a focus on usability."
                delay={1.0}
              />
              <ExpertiseCard
                title="Performance Optimization"
                description="Optimizing applications for speed, efficiency, SEO, and smooth user experience."
                delay={1.1}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}

/* Skill Card */
function SkillCard({ name, level, delay }: { name: string; level: string; delay: number }) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-green-100 text-green-800 border-green-200"
      case "Advanced":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Beginner":
        return "bg-gray-100 text-gray-800 border-gray-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ y: -10, scale: 1.05 }}
    >
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
        <CardContent className="p-6 text-center h-full flex flex-col justify-between">
          <h3 className="font-semibold text-lg mb-3">{name}</h3>
          <Badge className={`${getLevelColor(level)} border`}>{level}</Badge>
        </CardContent>
      </Card>
    </motion.div>
  )
}

/* Expertise Card */
function ExpertiseCard({ title, description, delay }: { title: string; description: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ y: -10 }}
    >
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 h-full">
        <CardContent className="p-8 h-full">
          <h3 className="text-xl font-bold mb-4">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
