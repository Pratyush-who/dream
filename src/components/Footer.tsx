import { FiMoon } from 'react-icons/fi'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black/20 border-t border-white/10 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FiMoon className="w-5 h-5 text-amber-300" />
              <span className="font-bold">Snoov</span>
            </div>
            <p className="text-white/70">Bringing dreams to life through creative collaboration.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Features</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-white transition-colors">API</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              <li><Link href="/library" className="text-white/70 hover:text-white transition-colors">Dream Library</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Creator Showcase</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Forum</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-white/70 hover:text-white transition-colors">About</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50 text-sm">
          <p>© 2023 Snoov. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}