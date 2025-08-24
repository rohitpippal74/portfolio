"use client"

import type React from "react"

import { Phone, Mail, Briefcase, Github, Linkedin, Twitter, Send } from "lucide-react"
import { motion } from "framer-motion"
import PageTransition from "@/components/page-transition"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

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
              Contact Me
            </motion.h1>
            <motion.div
              className="w-20 h-1 bg-primary mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div>
                <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                </p>
              </div>

              <div className="space-y-6">
                <motion.div
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/50"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Mail className="h-6 w-6 text-primary" />
                  <span className="text-lg">Rohitpippale7989@gmail.com</span>
                </motion.div>
                {/* <motion.div
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/50"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Phone className="h-6 w-6 text-primary" />
                  <span className="text-lg">+1 (123) 456-7890</span>
                </motion.div> */}
                <motion.div
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/50"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Briefcase className="h-6 w-6 text-primary" />
                  <span className="text-lg">Available for freelance projects</span>
                </motion.div>
              </div>

              <div className="flex gap-6 pt-4">
                <motion.a
                  href="https://github.com/rohitpippale" target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ y: -5, scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="h-8 w-8" />
                  <span className="sr-only">GitHub</span>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/rohit-pippale-775b3019a/" target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ y: -5, scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="h-8 w-8" />
                  <span className="sr-only">LinkedIn</span>
                </motion.a>
                {/* <motion.a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ y: -5, scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Twitter className="h-8 w-8" />
                  <span className="sr-only">Twitter</span>
                </motion.a> */}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="border-2">
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <motion.div
                      className="text-center py-12"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Send className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. I'll get back to you as soon as possible.
                      </p>
                      <Button className="mt-6" onClick={() => setIsSubmitted(false)}>
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                          className="space-y-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          <label htmlFor="name" className="text-sm font-semibold">
                            Name
                          </label>
                          <input
                            id="name"
                            value={formState.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            placeholder="Your Name"
                            required
                          />
                        </motion.div>
                        <motion.div
                          className="space-y-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          <label htmlFor="email" className="text-sm font-semibold">
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            placeholder="your.email@example.com"
                            required
                          />
                        </motion.div>
                      </div>
                      <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        <label htmlFor="subject" className="text-sm font-semibold">
                          Subject
                        </label>
                        <input
                          id="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="Project Inquiry"
                          required
                        />
                      </motion.div>
                      <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                      >
                        <label htmlFor="message" className="text-sm font-semibold">
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={6}
                          value={formState.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border rounded-lg bg-background resize-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="Hello, I'd like to talk about..."
                          required
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Button className="w-full py-3 text-lg" type="submit" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <>
                              <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-5 w-5" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
