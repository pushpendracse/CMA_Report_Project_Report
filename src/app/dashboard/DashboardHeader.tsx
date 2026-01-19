"use client"

import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between mb-8">
  <div className="flex w-full items-center gap-4">

    {/* FREE PLAN */}
    <Badge className="group flex flex-1 items-center justify-center py-2 text-sm">
      <span
        className="
          inline-block
          transition-transform transition-shadow duration-200 ease-out
          group-hover:scale-110
          group-hover:drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]
        "
      >
        🎁 FREE PLAN
      </span>
    </Badge>

    {/* Add Project Report */}
    <Button className="group flex flex-1 items-center justify-center gap-2">
      <Plus className="w-4 h-4 
           inline-block
          transition-transform transition-shadow duration-200 ease-out
          group-hover:scale-110
          group-hover:drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]" />
      <span
        className="
          inline-block
          transition-transform transition-shadow duration-200 ease-out
          group-hover:scale-110
          group-hover:drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]
        "
      >
        Add Project Report
      </span>
    </Button>

    {/* Add CMA Report */}
    <Button
      variant="outline"
      className="group flex flex-1 items-center justify-center gap-2"
    >
      <Plus className="
          inline-block
          transition-transform transition-shadow duration-200 ease-out
          group-hover:scale-110
          group-hover:drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]" />
      <span
        className="
          inline-block
          transition-transform transition-shadow duration-200 ease-out
          group-hover:scale-110
          group-hover:drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]
        "
      >
        Add CMA Report
      </span>
    </Button>

  </div>
</div>

  )
}
