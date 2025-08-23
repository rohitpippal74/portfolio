"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Clock,
  CheckCircle,
  Star,
  Users,
  Target,
  Calendar,
  MessageCircle,
  Code,
  Palette,
  Smartphone,
  Globe,
  ArrowRight,
  Coffee,
  Briefcase,
} from "lucide-react"

export function FreelanceAvailabilityBanner() {
  return (
    <motion.div
      className="bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 border border-green-500/20 rounded-lg p-4 mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <motion.div
            className="w-3 h-3 bg-green-500 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
          <span className="font-semibold text-green-700 dark:text-green-400">Available for Freelance Projects</span>
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            <Clock className="w-3 h-3 mr-1" />
            Quick Response
          </Badge>
        </div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button size="sm" className="group">
            <MessageCircle className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
            Let's Talk
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}

export function FreelanceStats() {
  const stats = [
    { number: "50+", label: "Projects Completed", icon: <Target className="h-5 w-5" /> },
    { number: "30+", label: "Happy Clients", icon: <Users className="h-5 w-5" /> },
    { number: "5+", label: "Years Experience", icon: <Calendar className="h-5 w-5" /> },
    { number: "24h", label: "Average Response", icon: <Clock className="h-5 w-5" /> },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, scale: 1.05 }}
        >
          <Card className="p-4 text-center hover:shadow-lg transition-all duration-300 group">
            <CardContent className="p-0">
              <div className="text-primary mb-2 flex justify-center group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary">{stat.number}</h3>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

export function FreelanceServices() {
  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Website Development",
      description: "Custom websites built with modern technologies",
      price: "Starting at $2,500",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile First"],
      popular: false,
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Web Application",
      description: "Full-stack web applications with advanced features",
      price: "Starting at $5,000",
      features: ["Custom Backend", "Database Design", "API Integration", "Admin Panel"],
      popular: true,
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interface designs",
      price: "Starting at $1,500",
      features: ["User Research", "Wireframing", "Prototyping", "Design System"],
      popular: false,
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Consultation",
      description: "Technical consultation and code review services",
      price: "$150/hour",
      features: ["Code Review", "Architecture Planning", "Performance Audit", "Best Practices"],
      popular: false,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
        >
          <Card
            className={`p-6 h-full hover:shadow-xl transition-all duration-300 relative ${
              service.popular ? "border-2 border-primary" : ""
            }`}
          >
            {service.popular && (
              <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 bg-primary">Most Popular</Badge>
            )}
            <CardContent className="p-0">
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
              <div className="text-2xl font-bold text-primary mb-4">{service.price}</div>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

export function FreelanceProcess() {
  const steps = [
    {
      number: "01",
      title: "Discovery Call",
      description: "We discuss your project requirements, goals, and timeline in detail.",
      icon: <MessageCircle className="h-6 w-6" />,
    },
    {
      number: "02",
      title: "Proposal & Planning",
      description: "I create a detailed proposal with timeline, milestones, and pricing.",
      icon: <Briefcase className="h-6 w-6" />,
    },
    {
      number: "03",
      title: "Design & Development",
      description: "I start working on your project with regular updates and feedback sessions.",
      icon: <Code className="h-6 w-6" />,
    },
    {
      number: "04",
      title: "Testing & Launch",
      description: "Thorough testing, final revisions, and successful project delivery.",
      icon: <CheckCircle className="h-6 w-6" />,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map((step, index) => (
        <motion.div
          key={step.number}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          viewport={{ once: true }}
          className="text-center relative"
        >
          <motion.div
            className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 relative"
            whileHover={{ scale: 1.1 }}
          >
            <div className="text-primary">{step.icon}</div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
              {step.number}
            </div>
          </motion.div>
          <h3 className="text-lg font-bold mb-2">{step.title}</h3>
          <p className="text-muted-foreground text-sm">{step.description}</p>
          {index < steps.length - 1 && (
            <motion.div
              className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            />
          )}
        </motion.div>
      ))}
    </div>
  )
}

export function FreelanceTestimonials() {
  const testimonials = [
    {
      quote:
        "Outstanding work! The website exceeded our expectations and was delivered on time. Highly recommended for any web development project.",
      author: "Sarah Johnson",
      role: "CEO, TechStart",
      project: "E-commerce Platform",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      quote:
        "Professional, responsive, and delivered exactly what we needed. The attention to detail and communication throughout the project was excellent.",
      author: "Mike Chen",
      role: "Product Manager",
      project: "SaaS Dashboard",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      quote:
        "Amazing developer! Our website performance improved dramatically and the new design has increased our conversion rate by 40%.",
      author: "Emily Davis",
      role: "Marketing Director",
      project: "Company Website",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.author}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
        >
          <Card className="p-6 h-full hover:shadow-lg transition-all duration-300">
            <CardContent className="p-0">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <Badge variant="outline" className="text-xs mt-1">
                    {testimonial.project}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

export function FreelanceCTA() {
  return (
    <motion.div
      className="bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 text-center border"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
      >
        <Coffee className="h-10 w-10 text-primary" />
      </motion.div>
      <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
      <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
        Let's discuss your ideas and turn them into reality. I'm available for new projects and would love to help you
        achieve your goals.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button size="lg" className="group">
            <MessageCircle className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            Start a Project
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button variant="outline" size="lg" className="group">
            <Calendar className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            Schedule a Call
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}
