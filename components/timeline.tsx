import type React from "react"
import { cn } from "@/lib/utils"

export interface TimelineItem {
  title: string
  subtitle: string
  icon: React.ReactNode
  color: "blue" | "gray" | "green"
}

interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

const colorVariants = {
  blue: {
    icon: "bg-blue-100 text-blue-600 border-blue-200",
    line: "bg-blue-200",
    dot: "bg-blue-600",
  },
  gray: {
    icon: "bg-gray-100 text-gray-600 border-gray-200",
    line: "bg-gray-200",
    dot: "bg-gray-400",
  },
  green: {
    icon: "bg-green-100 text-green-600 border-green-200",
    line: "bg-green-200",
    dot: "bg-green-600",
  },
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("space-y-6", className)}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        const colors = colorVariants[item.color]

        return (
          <div key={index} className="relative flex items-start gap-4">
            {/* Icon container */}
            <div className="relative flex-shrink-0">
              <div className={cn("flex h-12 w-12 items-center justify-center rounded-lg border-2", colors.icon)}>
                {item.icon}
              </div>

              {/* Connecting line */}
              {!isLast && (
                <div className="absolute left-1/2 top-12 h-6 w-0.5 -translate-x-1/2 transform">
                  <div className={cn("h-full w-full", colors.line)} />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 pb-6">
              <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.subtitle}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
