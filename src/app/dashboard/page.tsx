import { AppSidebar } from "@/components/layout/AppSidebar";
import DashboardHeader from "./DashboardHeader";
import DashboardStats from "./DashboardStats";


export default function dashboard() {
  return (

    <div className="flex">
      <AppSidebar />
      <div className="flex-1 p-4">
        <DashboardHeader />
        <DashboardStats />
        
      </div>
    </div>
  );
}