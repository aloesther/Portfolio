"use client"

import type React from "react"

import { type VariantProps, cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

export const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2",
  {
    variants: {
      variant: {
        default: "bg-muted hover:bg-muted/80",
        active: "bg-gray-900 text-white hover:bg-gray-700",
      },
      size: {
        default: "h-9 px-3",
        sm: "h-8 px-2 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ToggleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof toggleVariants> {}

export function Toggle({ className, variant, size, ...props }: ToggleProps) {
  return <button className={cn(toggleVariants({ variant, size, className }))} {...props} />
}
