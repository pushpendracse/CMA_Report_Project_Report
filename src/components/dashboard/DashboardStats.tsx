"use client";

import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, FileText } from "lucide-react";
import ReportsPage from "../dashboard/ProjectReports";
import CMAReports from "../dashboard/CMAReports";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export default function DashboardStats() {
  return (
    <div >

      {/* Stats Cards (NO CHANGE) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="rounded-2xl bg-card border-border border text-foreground">
          <CardContent style={{
            padding: "1rem",         
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }} className="p-1 flex justify-between items-center">
            <div>
              <p className="text-sm text-neutral-400">Today's Reports</p>
              <p className="text-3xl font-bold">0</p>
            </div>
            <div className="p-3 bg-neutral-800 rounded-xl">
              <FileText className="text-neutral-100" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl bg-card border border">
          <CardContent
            style={{
              padding: "1rem",          
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }} className="p-6 flex justify-between items-center">
            <div>
              <p className="text-sm text-foreground">Total Reports</p>
              <p className="text-3xl font-bold text-foreground">0</p>
            </div>
            <div className="p-3 bg-neutral-800 rounded-xl">
              <BarChart3 className="text-neutral-100" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs Section */}
      <div className="mt-1 p-1 bg-card">
        <Tabs defaultValue="project"  className="w-full pt-1">

          <TabsList
            style={{
              width: "fit-content",
              marginLeft: "auto",  
              marginRight: "0",
              marginBottom: "1rem",
              background:"primary",
            }} className="bg-card"
          >
            <TabsTrigger value="project">
              Project Reports
            </TabsTrigger>
            <TabsTrigger value="cma">
              CMA Reports
            </TabsTrigger>
          </TabsList>

          <TabsContent value="project" >
            <ReportsPage />
          </TabsContent>

          <TabsContent value="cma">
            <CMAReports />
          </TabsContent>

        </Tabs>
      </div>

    </div>
  );
}
