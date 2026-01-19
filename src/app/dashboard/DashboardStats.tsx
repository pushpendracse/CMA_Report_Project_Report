import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, FileText } from "lucide-react";
import ReportsPage from "./ProjectReports"; 

export default function DashboardStats() {
  return (
    <div className="p-6 bg-primary min-h-screen rounded-lg">
      {/* Only Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Today's Reports */}
        <Card className="rounded-2xl bg-neutral-900 border border-neutral-800 transition-all duration-300 ease-out hover:bg-neutral-800/90 hover:border-neutral-600 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] hover:-translate-y-1">
          <CardContent className="p-6 flex justify-between items-center">
            <div>
              <p className="text-sm text-neutral-400">Today's Reports</p>
              <p className="text-3xl font-bold text-neutral-100">0</p>
            </div>
            <div className="p-3 bg-neutral-800 rounded-xl">
              <FileText className="text-neutral-100" />
            </div>
          </CardContent>
        </Card>
        

        {/* Total Reports */}
        <Card className="rounded-2xl bg-neutral-900 border border-neutral-800 transition-all duration-300 ease-out hover:bg-neutral-800/90 hover:border-neutral-600 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] hover:-translate-y-1">
          <CardContent className="p-6 flex justify-between items-center">
            <div>
              <p className="text-sm text-neutral-400">Total Reports</p>
              <p className="text-3xl font-bold text-neutral-100">0</p>
            </div>
            <div className="p-3 bg-neutral-800 rounded-xl">
              <BarChart3 className="text-neutral-100" />
            </div>
          </CardContent>
        </Card>
        
      </div>
      <ReportsPage/>
    </div>
  );
}