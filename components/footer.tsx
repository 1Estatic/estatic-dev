"use client"

import type { MouseEvent } from 'react'
import { Heart, Code } from 'lucide-react'
import { SiDiscord, SiGithub, SiGmail } from 'react-icons/si'

export function Footer() {
  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Estatic</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Passionate Roblox developer creating innovative gaming experiences that captivate millions of players
              worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => handleScroll(e, 'home')} 
                  className="text-muted-foreground hover:text-primary transition-all duration-200 hover:translate-x-1 inline-block cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleScroll(e, 'about')} 
                  className="text-muted-foreground hover:text-primary transition-all duration-200 hover:translate-x-1 inline-block cursor-pointer"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#games" 
                  onClick={(e) => handleScroll(e, 'games')} 
                  className="text-muted-foreground hover:text-primary transition-all duration-200 hover:translate-x-1 inline-block cursor-pointer"
                >
                  Games
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleScroll(e, 'contact')} 
                  className="text-muted-foreground hover:text-primary transition-all duration-200 hover:translate-x-1 inline-block cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Game Development</li>
              <li className="text-muted-foreground">Lua Scripting</li>
              <li className="text-muted-foreground">Team Leadership</li>
              <li className="text-muted-foreground">Consultation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:CorporationEstatic@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-all duration-200 hover:translate-x-1 inline-flex items-center gap-2"
                >
                  <SiGmail className="w-4 h-4" />
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://discord.com/channels/@me/332579846062342155"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-200 hover:translate-x-1 inline-flex items-center gap-2"
                >
                  <SiDiscord className="w-4 h-4" />
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/1Estatic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-200 hover:translate-x-1 inline-flex items-center gap-2"
                >
                  <SiGithub className="w-4 h-4" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="flex items-center gap-2">
            © 2025 Estatic. Made with <Heart className="w-4 h-4 text-red-500 animate-heartbeat" /> and <Code className="w-4 h-4" />
          </p>
          <p>Built with React & TypeScript</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
