import {
  LayoutDashboard,
  CreditCard,
  FileText,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const sidebarMenu = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Billing",
    href: "/billing",
    icon: CreditCard,
  },
  {
    label: "Plans",
    href: "/plans",
    icon: FileText,
  },
  {
    label: "Support",
    href: "/support",
    icon: HelpCircle,
  },
];

export function AppSidebar() {
  return (
    <div className="w-64 h-screen bg-gray-100 p-4">  {/* Sidebar fixed width, full height */}
       <div className="mb-8">
        <h2 className="text-2xl font-extrabold text-center text-gray-800">
          Dashboard
        </h2>
       
      </div>
      <div className="flex flex-col gap-2">
        {sidebarMenu.map((item) => (    
          <Link key={item.label} href={item.href}>
            <Button variant="ghost"  className="justify-start w-full
               transition-transform duration-200
               hover:translate-x-1 hover:text-blue-600 hover:-translate-y-0.5 hover:scale-105 border-transparent hover:border-blue-600 rounded-lg">
              <item.icon className="mr-2 h-5 w-5" />
              {item.label}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}

