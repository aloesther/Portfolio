"use client"

import type React from "react"

import { cn } from "@/lib/utils"

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md bg-gray-900 px-2 py-0.5 text-xs font-medium text-white",
        className,
      )}
      {...props}
    />
  )
}
