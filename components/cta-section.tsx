import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CTASectionProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

export function CTASection({ title, description, buttonText, buttonLink }: CTASectionProps) {
  return (
    <section className="py-16 md:py-20 cta-gradient text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
          <p className="text-lg text-blue-100 mb-8">{description}</p>
          <Link href={buttonLink}>
            <Button className="bg-white text-primary hover:bg-blue-50 px-8 py-6 rounded-lg font-medium text-lg">
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

