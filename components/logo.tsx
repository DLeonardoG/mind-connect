import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

const sizeClasses = {
  sm: "h-6 w-6 text-base",
  md: "h-8 w-8 text-xl",
  lg: "h-12 w-12 text-2xl",
}

export function Logo({ className, size = "md" }: LogoProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center text-primary bg-primary/10 rounded-lg font-bold",
        sizeClasses[size],
        className
      )}
    >
      M
    </div>
  )
}

