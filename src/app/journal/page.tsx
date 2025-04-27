'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiMic, FiSave, FiBook, FiShare2, FiMoon } from 'react-icons/fi'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function DreamJournal() {
  const [dreamText, setDreamText] = useState('')
  const [isRecording, setIsRecording] = useState(false)
  const [mood, setMood] = useState<'surreal' | 'romantic' | 'horror' | 'adventure'>('surreal')
  const [language, setLanguage] = useState('english')
  const [isProcessing, setIsProcessing] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    // Process dream here
    setTimeout(() => {
      setIsProcessing(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50 text-gray-900">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-8">
            <FiMoon className="w-6 h-6 text-purple-600" />
            <h1 className="text-3xl font-bold">Dream Journal</h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Record Your Dream</h2>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setIsRecording(!isRecording)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full ${isRecording ? 'bg-red-100 text-red-600' : 'bg-purple-100 text-purple-600'}`}
                  >
                    <FiMic className="w-4 h-4" />
                    {isRecording ? 'Stop' : 'Record'}
                  </button>
                </div>
              </div>

              <textarea
                value={dreamText}
                onChange={(e) => setDreamText(e.target.value)}
                placeholder="Describe your dream here... or speak it using the record button above"
                className="w-full h-64 p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Dream Mood</label>
                  <select
                    value={mood}
                    onChange={(e) => setMood(e.target.value as any)}
                    className="w-full p-2 border border-gray-200 rounded-lg"
                  >
                    <option value="surreal">Surreal</option>
                    <option value="romantic">Romantic</option>
                    <option value="horror">Horror</option>
                    <option value="adventure">Adventure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Language</label>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full p-2 border border-gray-200 rounded-lg"
                  >
                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                    <option value="tamil">Tamil</option>
                    <option value="bengali">Bengali</option>
                    <option value="telugu">Telugu</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={isProcessing || !dreamText.trim()}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium ${isProcessing || !dreamText.trim() ? 'bg-gray-300 cursor-not-allowed' : 'bg-purple-600 text-white hover:bg-purple-700'}`}
              >
                {isProcessing ? (
                  'Processing...'
                ) : (
                  <>
                    <FiBook className="w-4 h-4" />
                    Transform to Story
                  </>
                )}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="button"
                disabled={!dreamText.trim()}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium ${!dreamText.trim() ? 'bg-gray-300 cursor-not-allowed' : 'bg-white text-purple-600 border border-purple-600 hover:bg-purple-50'}`}
              >
                <FiSave className="w-4 h-4" />
                Save Draft
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="button"
                disabled={!dreamText.trim()}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium ${!dreamText.trim() ? 'bg-gray-300 cursor-not-allowed' : 'bg-amber-500 text-white hover:bg-amber-600'}`}
              >
                <FiShare2 className="w-4 h-4" />
                Share with Community
              </motion.button>
            </div>
          </form>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}