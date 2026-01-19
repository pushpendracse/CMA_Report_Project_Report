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
    <div className="w-64 h-screen bg-Sidebar p-4">  {/* Sidebar fixed width, full height */}
       <div className="mb-8">
        <h2 className="text-2xl font-extrabold text-center text-foreground">
          Dashboard
        </h2>
       
      </div>
      <div className="flex flex-col gap-2">
        {sidebarMenu.map((item) => (    
          <Link key={item.label} href={item.href}>
            <Button variant="ghost"  className="justify-start w-full
               border-border hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer rounded-lg">
              <item.icon className="mr-2 h-5 w-5" />
              {item.label}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}

