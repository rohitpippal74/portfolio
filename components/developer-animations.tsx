"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function TypingAnimation({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }
    }, 100 + delay)

    return () => clearTimeout(timer)
  }, [currentIndex, text, delay])

  return (
    <span className="font-mono">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
        className="text-primary"
      >
        |
      </motion.span>
    </span>
  )
}

export function FloatingCode({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      className="absolute font-mono text-sm text-primary/30 pointer-events-none"
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: [0, 1, 1, 0],
        y: [100, -20, -40, -100],
        x: [0, Math.random() * 50 - 25, Math.random() * 100 - 50],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: Math.random() * 5 + 3,
      }}
    >
      {children}
    </motion.div>
  )
}

export function CodeBlock({ code, language }: { code: string; language: string }) {
  return (
    <motion.div
      className="bg-gray-900 rounded-lg p-4 font-mono text-sm overflow-hidden"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="text-gray-400 ml-2">{language}</span>
      </div>
      <motion.pre
        className="text-green-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
      >
        {code}
      </motion.pre>
    </motion.div>
  )
}

export function TerminalWindow() {
  const [currentCommand, setCurrentCommand] = useState(0)
  const commands = [
    "npm install awesome-portfolio",
    "git commit -m 'Added new features'",
    "npm run build",
    "git push origin main",
    "npm start",
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCommand((prev) => (prev + 1) % commands.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [commands.length])

  return (
    <motion.div
      className="bg-gray-900 rounded-lg p-4 font-mono text-sm w-80"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="text-gray-400 ml-2">Terminal</span>
      </div>
      <div className="space-y-2">
        <div className="text-green-400">
          <span className="text-blue-400">user@portfolio</span>
          <span className="text-white">:</span>
          <span className="text-purple-400">~/projects</span>
          <span className="text-white">$ </span>
          <TypingAnimation text={commands[currentCommand]} />
        </div>
      </div>
    </motion.div>
  )
}

export function SkillProgressBar({
  skill,
  percentage,
  delay = 0,
}: { skill: string; percentage: number; delay?: number }) {
  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between mb-2">
        <span className="font-semibold">{skill}</span>
        <span className="text-primary font-bold">{percentage}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <motion.div
          className="bg-gradient-to-r from-primary to-purple-500 h-2 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ delay: delay + 0.2, duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  )
}
