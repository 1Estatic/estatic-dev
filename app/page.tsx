'use client'

import { useState, useEffect } from 'react'
import { Eye, Users, Calendar, Trophy, Play, ArrowDown, Code, Gamepad2, Lightbulb, Palette, Zap, Mail, MessageCircle, Send, ExternalLink, PocketKnife as Knife, Headphones, BookOpen, Film, FolderOpen, GraduationCap, X, ArrowUp } from 'lucide-react'
import { SiDiscord, SiGithub, SiGmail } from 'react-icons/si'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function Home() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const projectCategories = [
    {
      id: 'animations',
      title: 'Animations',
      description: '3D Animations that I\'ve made',
      icon: Film,
      color: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-400',
      projects: [
        {
          id: 1,
          title: 'Werewolf Animation',
          description: 'A great Idle animation for a werewolf character',
          image: '/abstract-motion-graphics.png'
        },
        {
          id: 2,
          title: 'Wolf Animation',
          description: 'A great idle animation example of a wolf character',
          image: '/ui-animation-design.jpg'
        },
        {
          id: 3,
          title: 'Daggers Idle Animation R6',
          description: 'Idle animation for a daggers character in R6',
          image: '/3d-character-animation.png'
        },
        {
          id: 4,
          title: 'Daggers Combat Animation R6',
          description: 'Combat animation for a daggers character in R6',
          image: '/3d-character-animation.png'
        },
      ]
    },
    {
      id: 'projects',
      title: 'Projects',
      description: 'Personal and freelance projects',
      icon: FolderOpen,
      color: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20',
      iconColor: 'text-blue-400',
      projects: [
        {
          id: 1,
          title: 'Games made or worked on',
          description: 'Games that I\'ve made or contributed to on Roblox or on other platforms',
          image: '/ecommerce-platform-concept.png'
        },
        {
          id: 2,
          title: 'This portfolio website',
          description: 'This very portfolio website you are viewing right now',
          image: '/social-media-dashboard.png'
        },
      ]
    },
    {
      id: 'college',
      title: 'College Work',
      description: 'Academic and research projects',
      icon: GraduationCap,
      color: 'bg-gradient-to-br from-green-500/20 to-emerald-500/20',
      iconColor: 'text-green-400',
      projects: [
        {
          id: 1,
          title: 'OOP Practicing on Python',
          description: 'A project practicing Object-Oriented Programming concepts using Python and learnt from college',
          image: '/ai-research-paper.jpg'
        },
        {
          id: 2,
          title: 'Web Developmnent Project',
          description: 'Web development final project (SOON)',
          image: '/web-development-project.png'
        },
        {
          id: 3,
          title: 'Certificate of additional hours completed',
          description: 'Some of my certificates for additional hours completed during college',
          image: '/data-science-study.jpg'
        },
      ]
    }
  ]

  const expandedCategoryData = projectCategories.find(cat => cat.id === expandedCategory)

  return (
    <main className="min-h-screen text-foreground">
      <div className="stars-layer" />
      <div className="nebula" />
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-linear-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance mb-6">
            Hi, I'm <span className="text-primary">Estatic</span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 text-balance">
            Creative Developer & Creator
          </p>

          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            Building innovative digital experiences that captivate millions of users worldwide
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="gap-2">
              <Play className="w-5 h-5" />
              View My Work
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              Learn More About Me
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { icon: Eye, label: '5.7B', value: 'Total Visits' },
              { icon: Users, label: '22.8K', value: 'Active Players' },
              { icon: Calendar, label: '4+', value: 'Years Exp' },
              { icon: Trophy, label: '8', value: 'Games' }
            ].map((stat, i) => {
              const Icon = stat.icon
              return (
                <div key={i} className="p-4 rounded-lg border border-border bg-card/80 backdrop-blur-md hover:border-primary/50 transition-colors shadow-sm">
                  <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-lg font-bold text-primary">{stat.label}</p>
                  <p className="text-xs text-muted-foreground">{stat.value}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-16 flex flex-col items-center gap-2">
            <p className="text-sm text-muted-foreground font-medium">Scroll down</p>
            <ArrowDown className="w-6 h-6 text-primary animate-bounce" />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-balance">Hardworking Developer</h2>
          </div>

          <Card className="overflow-hidden bg-card/80 backdrop-blur-md border-border p-12 mb-8 shadow-lg">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">About Me</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm Estatic, a passionate creative developer focused on creating engaging digital experiences. I specialize in building games that bring people together and provide entertainment for players of all ages.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My expertise lies in game development, UI design, and creating memorable gameplay mechanics that keep players coming back for more.
                </p>
              </div>

              <div className="border-t border-border/30 pt-6">
                <h3 className="text-2xl font-bold text-primary mb-4">Achievements</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Throughout my career, I've successfully delivered multiple high-impact projects, collaborated with talented teams, and continuously pushed the boundaries of what's possible in game development and digital creation.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: Gamepad2, title: 'Game Dev', description: 'Expert in game development' },
              { icon: Code, title: 'Self-Taught', description: 'Continuous learner' },
              { icon: Users, title: 'Soft-Skilled', description: 'Great communication' }
            ].map((achievement, i) => {
              const Icon = achievement.icon
              return (
                <Card key={i} className="bg-card/80 backdrop-blur-md border-border p-6 hover:border-primary/50 transition-colors shadow-sm">
                  <Icon className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold text-primary mb-2">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-balance">Technical Mastery</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Comprehensive expertise in modern development technologies and methodologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Code,
                title: 'Lua Scripting',
                description: 'Advanced scripting for Roblox game mechanics, data management, and server-client communication with optimized performance'
              },
              {
                icon: Gamepad2,
                title: 'Game Design',
                description: 'Creating engaging gameplay loops, intuitive user interfaces, and immersive game worlds that captivate players'
              },
              {
                icon: Zap,
                title: 'Performance Optimization',
                description: 'Ensuring smooth gameplay through efficient code architecture, resource management, and scalable solutions'
              },
              {
                icon: Users,
                title: 'Team Leadership',
                description: 'Managing development teams, coordinating complex projects, and mentoring junior developers'
              }
            ].map((skill, i) => {
              const Icon = skill.icon
              return (
                <Card key={i} className="overflow-hidden bg-card/80 backdrop-blur-md border-border hover:border-primary/50 transition-all p-8 shadow-sm">
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-3">{skill.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="games" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-balance">Portfolio</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Explore my projects across different categories
            </p>
          </div>

          {/* Category Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {projectCategories.map((category) => {
              const IconComponent = category.icon
              return (
                <Card
                  key={category.id}
                  className="overflow-hidden bg-card/80 backdrop-blur-md border-border hover:border-primary/50 transition-all cursor-pointer group shadow-sm"
                  onClick={() => setExpandedCategory(category.id)}
                >
                  <div className="p-8 space-y-4">
                    <div className={`w-16 h-16 rounded-xl bg-linear-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <IconComponent className={`w-8 h-8 ${category.iconColor}`} />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>

                    <div className="pt-4">
                      <p className="text-xs text-muted-foreground font-medium">{category.projects.length} projects</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Featured Highlights */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-bold text-primary">Featured Highlights</h3>
              <p className="text-muted-foreground mt-2">My featured projects</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {projectCategories.map((category) => (
                <Card
                  key={`highlight-${category.id}`}
                  className="overflow-hidden bg-card/80 backdrop-blur-md border-border hover:border-primary/50 transition-all cursor-pointer group shadow-sm"
                  onClick={() => setExpandedCategory(category.id)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={category.projects[0]?.image || '/placeholder.svg'}
                      alt={category.projects[0]?.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <div className="px-3 py-1 rounded-full bg-primary/80 text-xs font-semibold text-background">
                        {category.title}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h4 className="text-xl font-bold text-primary line-clamp-2">{category.projects[0]?.title}</h4>
                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{category.projects[0]?.description}</p>

                    <Button size="sm" className="w-full gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-balance">Let's Connect</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Want to collaborate on a project or have questions? Feel free to reach out through any of the methods below.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-3 flex flex-col">
              {[
                {
                  icon: SiGmail,
                  title: 'Email',
                  value: 'CorporationEstatic@gmail.com',
                  description: 'Professional inquiries and business opportunities',
                  action: 'Send Email',
                  color: 'from-blue-500/20 to-cyan-500/20',
                  iconColor: 'text-blue-400'
                },
                {
                  icon: SiDiscord,
                  title: 'Discord',
                  value: '@estatic.',
                  description: 'Quick questions and community discussions',
                  action: 'Add Friend',
                  color: 'from-purple-500/20 to-pink-500/20',
                  iconColor: 'text-purple-400'
                },
                {
                  icon: SiGithub,
                  title: 'GitHub',
                  value: '@1Estatic',
                  description: 'Check out my open source projects and contributions',
                  action: 'View Profile',
                  color: 'from-gray-500/20 to-slate-500/20',
                  iconColor: 'text-gray-400'
                }
              ].map((contact, i) => {
                const Icon = contact.icon
                return (
                  <Card key={i} className="overflow-hidden bg-card/80 backdrop-blur-md border-border hover:border-primary/50 transition-all p-5 flex-1 shadow-sm">
                    <div className="flex flex-col h-full">
                      <div className="flex gap-3 mb-3">
                        <div className={`w-10 h-10 rounded-lg bg-linear-to-br ${contact.color} flex items-center justify-center shrink-0`}>
                          <Icon className={`w-5 h-5 ${contact.iconColor}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-primary">{contact.title}</h3>
                          <p className="text-sm font-mono text-primary mt-1">{contact.value}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 flex-1">{contact.description}</p>
                      <Button size="sm" className="gap-2 w-full">
                        <ExternalLink className="w-4 h-4" />
                        {contact.action}
                      </Button>
                    </div>
                  </Card>
                )
              })}
            </div>

            {/* Contact Form */}
            <Card className="overflow-hidden bg-card/80 backdrop-blur-md border-border p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Send a Message</h3>
                  <p className="text-sm text-muted-foreground">I typically respond within 24 hours</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Your Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Subject</label>
                    <input
                      type="text"
                      placeholder="Project collaboration"
                      className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Message</label>
                    <textarea
                      placeholder="Your message here..."
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                    />
                  </div>

                  <Button className="w-full gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Dialog for viewing projects */}
      <Dialog open={expandedCategory !== null} onOpenChange={(open: boolean) => { if (!open) setExpandedCategory(null) }}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {expandedCategoryData && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl">{expandedCategoryData.title}</DialogTitle>
                <p className="text-muted-foreground mt-2">{expandedCategoryData.description}</p>
              </DialogHeader>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                {expandedCategoryData.projects.map((project) => (
                  <Card key={project.id} className="overflow-hidden bg-card/80 backdrop-blur-md border-border shadow-sm">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-primary mb-2">{project.title}</h4>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
        </button>
      )}

      <Footer />
    </main>
  )
}
