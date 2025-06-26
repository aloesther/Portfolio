import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Conditionally joins class names together (shadcn pattern).
 * Example: cn("px-2", isActive && "bg-muted")
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
