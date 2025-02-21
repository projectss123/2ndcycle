"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { GradientCard } from "../../components/ui/gradient-card"
import { GradientButton } from "@/components/ui/gradient-button"
import { Github, Linkedin, Twitter } from "lucide-react"

const teamMembers = [
  {
    name: "Yara Yasser",
    role: "Founder & CEO",
    bio: "Passionate about sustainability and technology",
    image: "images/team/team-yara-yasser.png",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Fatma Bakr",
    role: "CFO",
    bio: "Building products that make a difference",
    image: "images/team/team-fatma-bakr.png",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Hisham Khaled",
    role: "Operations Manager",
    bio: "Turning ideas into reality through code",
    image: "images/team/team-hisham-khaled.png",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Hania Hatem",
    role: "HR Manager",
    bio: "Creating impactful stories that inspire change",
    image: "images/team/team-hania-hatem.png",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Malak Hatem",
    role: "Marketing Manager",
    bio: "Making eco-friendly choices accessible to all",
    image: "images/team/team-malak-hatem.png",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
 
]

export default function TeamPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-apple-green/10 via-mint/10 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6 gradient-text"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Meet Our Team
          </motion.h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-700">
            We're a passionate group of individuals dedicated to making the world a greener place, one cycle at a time.
          </p>
        </motion.div>
      </section>

      {/* Team Grid */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-mint/10 via-white to-apple-green/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GradientCard>
                  <div className="relative group">
                    <Image
                      src={`images/team/team-${member.name.toLowerCase().replace(" ", "-")}.png`}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-full h-80 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                    />
                    
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </GradientCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  )
}

