import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"


export function ProjectCard({
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
              {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                <Button variant="outline" className="w-full">
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Button>
              </motion.div> */}
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