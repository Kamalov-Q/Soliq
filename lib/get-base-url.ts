/**
 * Get the base URL for the application
 * Automatically detects Vercel deployment URL or uses custom domain
 */
export function getBaseUrl(): string {
  // If custom domain is set, use it (recommended for production)
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL
  }
  
  // On Vercel, automatically use the deployment URL
  // This works automatically - no configuration needed!
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  
  // Fallback for local development
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000"
  }
  
  // Default fallback (will be overridden when you add a custom domain)
  return "https://taxoff.uz"
}

