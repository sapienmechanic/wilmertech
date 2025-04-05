import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  description?: string
  centered?: boolean
  className?: string
  descriptionClassName?: string
}

export function SectionHeading({
  title,
  description,
  centered = false,
  className,
  descriptionClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">{title}</h2>
      {description && (
        <p className={cn("text-lg text-slate-600", centered && "max-w-3xl mx-auto", descriptionClassName)}>
          {description}
        </p>
      )}
    </div>
  )
}

