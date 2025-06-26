"use client"

export function Separator({ className = "" }: { className?: string }) {
  return <hr className={`my-4 border-border ${className}`} />
}
