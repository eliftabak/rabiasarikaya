import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getAbsoluteUrl(url: string): string {
  return url.startsWith('//') ? `https:${url}` : url;
}