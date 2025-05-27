"use client"

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded transform rotate-45"></div>
              <div className="absolute top-1 left-1 w-6 h-6 bg-white rounded transform rotate-45"></div>
            </div>
            <span className="text-xl font-bold text-gray-900">
              lets<span className="text-primary">transport</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/policies" className="text-gray-600 hover:text-primary transition-colors">
              Policies
            </Link>
            <Link href="/chat" className="text-gray-600 hover:text-primary transition-colors">
              AI Assistant
            </Link>
            <Link href="/search" className="text-gray-600 hover:text-primary transition-colors">
              Search
            </Link>
            <Link href="/org-chart" className="text-gray-600 hover:text-primary transition-colors">
              Org Chart
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <Button asChild className="hidden md:inline-flex">
              <Link href="/chat">Get Help</Link>
            </Button>

            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              <Link
                href="/policies"
                className="text-gray-600 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Policies
              </Link>
              <Link
                href="/chat"
                className="text-gray-600 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                AI Assistant
              </Link>
              <Link
                href="/search"
                className="text-gray-600 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Search
              </Link>
              <Link
                href="/org-chart"
                className="text-gray-600 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Org Chart
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
