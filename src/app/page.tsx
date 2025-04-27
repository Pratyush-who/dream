'use client';
import { motion } from 'framer-motion'
import { FiMoon, FiSun, FiBookOpen, FiFilm, FiPenTool, FiShare2 } from 'react-icons/fi'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState } from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-900 text-white">
      <Navbar />

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-pink-400">
              From Dreams to Reality
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-10"
          >
            Capture your dreams, transform them into stories, and collaborate with creators worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a href="/journal" className="bg-pink-500 hover:bg-pink-600 px-8 py-3 rounded-full font-semibold text-lg transition-all">
              Start Journaling
            </a>
            <a href="/library" className="bg-transparent border-2 border-white hover:bg-white hover:text-purple-900 px-8 py-3 rounded-full font-semibold text-lg transition-all">
              Explore Dreams
            </a>
          </motion.div>
        </section>

        {/* Value Proposition */}
        <DreamerCreatorSection />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* CTA */}
        <section className="text-center mt-20">
          <h2 className="text-3xl font-bold mb-6">Ready to explore the world of dreams?</h2>
          <a href="/journal" className="inline-block bg-amber-400 hover:bg-amber-500 text-purple-900 px-8 py-3 rounded-full font-semibold text-lg transition-all">
            Join Aura Now
          </a>
        </section>
      </main>

      <Footer />
    </div>
  )
}

const DreamerCreatorSection = () => {
  const [activeTab, setActiveTab] = useState<'dreamer' | 'creator'>('dreamer')

  return (
    <section className="mb-20">
      <div className="flex justify-center mb-10">
        <div className="flex bg-purple-800 rounded-full p-1">
          <button
            onClick={() => setActiveTab('dreamer')}
            className={`px-6 py-2 rounded-full transition-all ${activeTab === 'dreamer' ? 'bg-white text-purple-900 font-semibold' : 'text-white'}`}
          >
            For Dreamers
          </button>
          <button
            onClick={() => setActiveTab('creator')}
            className={`px-6 py-2 rounded-full transition-all ${activeTab === 'creator' ? 'bg-white text-purple-900 font-semibold' : 'text-white'}`}
          >
            For Creators
          </button>
        </div>
      </div>

      {activeTab === 'dreamer' ? (
        <motion.div
          key="dreamer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-3 gap-8"
        >
          <FeatureCard 
            icon={<FiMoon className="w-8 h-8" />}
            title="Record Your Dreams"
            description="Capture dreams as soon as you wake up using voice or text in any language."
          />
          <FeatureCard 
            icon={<FiBookOpen className="w-8 h-8" />}
            title="Transform to Stories"
            description="AI converts your dreams into beautiful stories, poems, or scripts."
          />
          <FeatureCard 
            icon={<FiShare2 className="w-8 h-8" />}
            title="Share & Inspire"
            description="Optionally share your dreams to inspire creators worldwide."
          />
        </motion.div>
      ) : (
        <motion.div
          key="creator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-3 gap-8"
        >
          <FeatureCard 
            icon={<FiSun className="w-8 h-8" />}
            title="Endless Inspiration"
            description="Access a library of unique dreams to spark your next project."
          />
          <FeatureCard 
            icon={<FiFilm className="w-8 h-8" />}
            title="Adapt Dreams"
            description="Turn dreams into films, animations, comics, or literature."
          />
          <FeatureCard 
            icon={<FiPenTool className="w-8 h-8" />}
            title="Showcase Work"
            description="Share your creations and connect with the dreamers who inspired you."
          />
        </motion.div>
      )}
    </section>
  )
}

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-purple-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-700"
    >
      <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-purple-100">{description}</p>
    </motion.div>
  )
}

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "As a filmmaker, I'm always chasing raw, untold stories. Aura became my secret treasure chest — someone's dream turned into my award-winning short film.",
      author: "Rahul, Filmmaker",
      role: "Short Film Director"
    },
    {
      quote: "I used to stare at blank pages for hours. Then I started exploring dreams on Aura. One dream about a drowning moon became my most loved poem.",
      author: "Priya, Poet",
      role: "Published Author"
    },
    {
      quote: "The surreal dream fragments on this app? Goldmine. I turned 5 anonymous dreams into a visual comic series — and the response? Mind-blowing.",
      author: "Arjun, Comic Artist",
      role: "Graphic Novelist"
    }
  ]

  return (
    <section className="my-20">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Community Says</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
          >
            <p className="italic text-lg mb-4">"{testimonial.quote}"</p>
            <div>
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-sm text-white/70">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}