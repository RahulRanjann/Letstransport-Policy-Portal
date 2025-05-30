"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Helper function for desktop nav link classes
  const navLinkClasses = (href: string) => {
    const isActive = pathname === href
    return `text-muted-foreground hover:text-primary transition-colors ${
      isActive ? "text-primary font-semibold" : ""
    }`.trim() // Added trim() to remove trailing space if not active
  }

  // Helper function for mobile nav link classes
  const mobileNavLinkClasses = (href: string) => {
    const isActive = pathname === href
    return `text-muted-foreground hover:text-primary transition-colors py-2 ${
      isActive ? "text-primary font-semibold" : ""
    }`.trim() // Added trim() to remove trailing space if not active
  }

  return (
    <header className="bg-background/80 backdrop-blur-md border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/LetsTransport Logos.svg"
              alt="LetsTransport Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="text-xl font-bold text-foreground">
              lets<span className="text-primary">transport</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/policies" className={navLinkClasses("/policies")}>
              Policies
            </Link>
            <Link href="/chat" className={navLinkClasses("/chat")}>
              AI Assistant
            </Link>
            <Link href="/search" className={navLinkClasses("/search")}>
              Search
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
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
                className={mobileNavLinkClasses("/policies")}
                onClick={() => setIsMenuOpen(false)}
              >
                Policies
              </Link>
              <Link
                href="/chat"
                className={mobileNavLinkClasses("/chat")}
                onClick={() => setIsMenuOpen(false)}
              >
                AI Assistant
              </Link>
              <Link
                href="/search"
                className={mobileNavLinkClasses("/search")}
                onClick={() => setIsMenuOpen(false)}
              >
                Search
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
