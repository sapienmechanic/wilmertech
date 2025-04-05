import type { LucideIcon } from "lucide-react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  href: string
  iconColor: string
  iconBgColor: string
  linkColor: string
  linkHoverColor: string
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  iconColor,
  iconBgColor,
  linkColor,
  linkHoverColor,
}: ServiceCardProps) {
  return (
    <Card className="bg-slate-50 border-slate-100">
      <CardHeader>
        <div className={`w-12 h-12 ${iconBgColor} rounded-lg flex items-center justify-center mb-4`}>
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
        <CardTitle className="text-slate-900">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <p className="text-slate-600 mb-4">{description}</p>
        <Link href={href} className={`inline-flex items-center ${linkColor} font-medium ${linkHoverColor}`}>
          Learn more <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}

