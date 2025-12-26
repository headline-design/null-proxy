"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function DocsPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to the first doc page
    // Update this to match the first doc in your navigation
    router.replace("/docs/getting-started")
  }, [router])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-pulse">Loading documentation...</div>
    </div>
  )
}
