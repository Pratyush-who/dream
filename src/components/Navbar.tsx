'use client'

import { motion } from 'framer-motion'
import { FiMoon } from 'react-icons/fi'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-2"
      >
        <FiMoon className="w-6 h-6 text-amber-300" />
        <Link href="/" className="text-xl font-bold">Aura</Link>
      </motion.div>
      
      <div className="hidden md:flex gap-6">
        <Link href="/" className="hover:text-amber-300 transition-colors">Features</Link>
        <Link href="/library" className="hover:text-amber-300 transition-colors">Community</Link>
        <Link href="#" className="hover:text-amber-300 transition-colors">Pricing</Link>
        <Link href="#" className="hover:text-amber-300 transition-colors">About</Link>
      </div>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-purple-900 px-4 py-2 rounded-full font-medium"
      >
        Sign In
      </motion.button>
    </nav>
  )
}