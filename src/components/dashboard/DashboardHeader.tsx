"use client"

import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex w-full items-center gap-4">

        <Badge variant="outline"  className="group flex flex-1 items-center justify-center py-2 text-sm">
          <span>
            🎁 FREE PLAN
          </span>
        </Badge>

        <Button variant="outline"  className="group flex flex-1 items-center justify-center gap-2">
          <Plus />
          <span>
            Add Project Report
          </span>
        </Button>

        <Button variant="outline" className="group flex flex-1 items-center justify-center gap-2 ">
          <Plus />
          <span>
            Add CMA Report
          </span>
        </Button>

      </div>
    </div>

  )
}
