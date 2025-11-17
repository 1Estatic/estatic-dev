"use client"

import { useState, useEffect } from "react"
import { Home, User, Zap, Gamepad2, MessageSquare, Moon, Sun, Monitor } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navigation() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as "light" | "dark" | "system" | null
    const initialTheme = savedTheme || "system"
    
    setTheme(initialTheme)
    applyTheme(initialTheme)

    const handleScroll = () => {
      const scrollY = window.scrollY
      if (scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleSystemThemeChange = () => {
      if (theme === 'system') {
        applyTheme('system')
      }
    }
    
    mediaQuery.addEventListener('change', handleSystemThemeChange)
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [theme])

  const applyTheme = (newTheme: "light" | "dark" | "system") => {
    const root = document.documentElement
    
    if (newTheme === 'system') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      if (isDark) {
        root.classList.add('dark')
      } else {
        root.classList.remove('dark')
      }
    } else if (newTheme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }

  const navItems = [
    { href: "#home", label: "Home", icon: Home },
    { href: "#about", label: "About", icon: User },
    { href: "#skills", label: "Skills", icon: Zap },
    { href: "#games", label: "Games", icon: Gamepad2 },
    { href: "#contact", label: "Contact", icon: MessageSquare },
  ]

  const changeTheme = (newTheme: "light" | "dark" | "system") => {
    setTheme(newTheme)
    applyTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
    }`}>
      <div className="rounded-full border border-border/50 backdrop-blur-lg bg-background/80 shadow-lg px-6">
        <div className="flex items-center justify-between h-14 gap-8">
          <a href="#home" onClick={(e) => handleClick(e, "#home")} className="text-xl font-bold text-primary whitespace-nowrap">
            Estatic
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <a key={item.href} href={item.href} onClick={(e) => handleClick(e, item.href)}>
                  <Button variant="ghost" size="sm" className="gap-2 rounded-full">
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </Button>
                </a>
              )
            })}
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                {theme === "light" ? <Sun className="w-5 h-5" /> : theme === "dark" ? <Moon className="w-5 h-5" /> : <Monitor className="w-5 h-5" />}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="rounded-xl">
              <DropdownMenuItem onClick={() => changeTheme("light")} className="gap-2 cursor-pointer">
                <Sun className="w-4 h-4" />
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeTheme("dark")} className="gap-2 cursor-pointer">
                <Moon className="w-4 h-4" />
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeTheme("system")} className="gap-2 cursor-pointer">
                <Monitor className="w-4 h-4" />
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
