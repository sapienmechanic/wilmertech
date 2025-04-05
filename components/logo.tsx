import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <span className="text-2xl font-bold gradient-text">Wilmer Technologies</span>
    </Link>
  )
}

