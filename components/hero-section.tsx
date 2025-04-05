import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface HeroSectionProps {
  title: string
  description: string
  showButtons?: boolean
  className?: string
}

export function HeroSection({ title, description, showButtons = true, className = "" }: HeroSectionProps) {
  return (
    <section className={`hero-gradient py-20 md:py-28 ${className}`}>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-6 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white max-w-4xl">{title}</h1>
          <p className="max-w-[700px] text-slate-300 md:text-xl">{description}</p>
          {showButtons && (
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-lg font-medium text-lg">
                  Get Started <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="border-slate-600 text-white hover:bg-slate-700 px-8 py-6 rounded-lg font-medium text-lg"
                >
                  Our Services
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white/5 to-transparent"></div>
    </section>
  )
}

