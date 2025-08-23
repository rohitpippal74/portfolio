"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      className="border-t py-12 bg-muted/30"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-muted-foreground">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <motion.div whileHover={{ y: -2 }}>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -2 }}>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
}
