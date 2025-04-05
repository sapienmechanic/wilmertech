"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/logo"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-slate-700 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-sm font-medium text-slate-700 hover:text-primary transition-colors">
              Services
            </Link>
            <div className="relative group">
              <button className="flex items-center text-sm font-medium text-slate-700 hover:text-primary transition-colors">
                Solutions
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1 h-4 w-4"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <Link href="/services/data-ai" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">
                    Data & AI
                  </Link>
                  <Link
                    href="/services/cloud-services"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                  >
                    Cloud Services
                  </Link>
                  <Link href="/services/ai-ml" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">
                    AI & ML
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/careers" className="text-sm font-medium text-slate-700 hover:text-primary transition-colors">
              Careers
            </Link>
            <Link href="/about" className="text-sm font-medium text-slate-700 hover:text-primary transition-colors">
              About
            </Link>
          </nav>

          <div className="hidden md:flex items-center">
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu} aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
            {isMenuOpen ? <X className="h-6 w-6 text-slate-700" /> : <Menu className="h-6 w-6 text-slate-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white animate-fadeIn">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-base font-medium text-slate-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-base font-medium text-slate-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <div className="space-y-2">
                <div className="flex items-center justify-between" onClick={() => setServicesOpen(!servicesOpen)}>
                  <span className="text-base font-medium text-slate-700">Solutions</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
                {servicesOpen && (
                  <div className="pl-4 space-y-2 border-l border-slate-200">
                    <Link
                      href="/services/data-ai"
                      className="block text-sm text-slate-700 hover:text-primary py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Data & AI
                    </Link>
                    <Link
                      href="/services/cloud-services"
                      className="block text-sm text-slate-700 hover:text-primary py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Cloud Services
                    </Link>
                    <Link
                      href="/services/ai-ml"
                      className="block text-sm text-slate-700 hover:text-primary py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      AI & ML
                    </Link>
                  </div>
                )}
              </div>
              <Link
                href="/careers"
                className="text-base font-medium text-slate-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Careers
              </Link>
              <Link
                href="/about"
                className="text-base font-medium text-slate-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </nav>
            <div className="flex flex-col space-y-3 pt-4 border-t border-slate-200">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

