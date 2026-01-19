import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FolderOpen, Plus } from "lucide-react"

export default function CMAReports() {
  return (
    <div className="p-1">
      <Card className="w-full bg-card">
        {/* Header */}
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <FolderOpen className="h-5 w-5 text-muted-foreground" />
            CMA Reports
          </CardTitle>
        </CardHeader>

        {/* Content */}
        <CardContent>
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="mb-4 rounded-full bg-muted p-4">
              <FolderOpen className="h-10 w-10 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-semibold">No Reports Found</h2>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              You haven't created any reports yet. Click "Add CMA Report"
              to get started.
            </p>

            <Button className="mt-6 gap-2">
              <Plus className="h-4 w-4" />
              CREATE YOUR CMA REPORT
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
