"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Link from "next/link"

export function ExitPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)
    return () => document.removeEventListener("mouseleave", handleMouseLeave)
  }, [hasShown])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative mx-4 max-w-md rounded-lg bg-white p-6 shadow-xl">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="text-center">
          <h3 className="text-xl font-bold text-secondary-800 mb-2">Wait! Don't Leave Yet</h3>
          <p className="text-gray-600 mb-4">
            Compare our pricing plans and find the perfect solution for your business.
          </p>
          <Button asChild className="w-full bg-primary hover:bg-primary-600">
            <Link href="https://salescentri.com/pricing/plans-overview">Compare Our Pricing Plans</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
