import type { LucideIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FeatureCardProps {
  icon?: LucideIcon
  title: string
  description: string
  iconColor?: string
  iconBgColor?: string
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  iconColor = "text-blue-600",
  iconBgColor = "bg-blue-100",
}: FeatureCardProps) {
  return (
    <Card className="bg-white border-slate-100">
      <CardHeader>
        {Icon && (
          <div className={`w-12 h-12 ${iconBgColor} rounded-lg flex items-center justify-center mb-4`}>
            <Icon className={`h-6 w-6 ${iconColor}`} />
          </div>
        )}
        <CardTitle className="text-slate-900">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <p className="text-slate-600">{description}</p>
      </CardContent>
    </Card>
  )
}

