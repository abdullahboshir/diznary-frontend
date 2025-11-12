"use client";

import { useState } from "react";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Menu, Bell, Utensils } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

import SideBar from "../sidebar/Sidebar";
import AccountMenu from "../dashboardHeader/AccountMenus";

const drawerWidth = 240;

interface DashboardDrawerProps {
  children: React.ReactNode;
}

export default function DashboardDrawer({ children }: DashboardDrawerProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Mock data - replace with your actual data fetching
  const userData = {
    fullName: "John Doe",
    profileImg: "/avatars/01.png",
    designation: "Software Engineer",
    role: "admin",
    user: { role: "admin" },
  };

  return (
    <div className="flex min-h-screen bg-muted/40">
      {/* Desktop Sidebar */}
      <div
        className={cn(
          "hidden lg:flex flex-col border-r min-h-screen bg-background transition-all duration-300",
          "w-[240px]"
        )}
      >
        <SideBar />
      </div>

      {/* Mobile Drawer */}
      <Drawer open={mobileOpen} onOpenChange={setMobileOpen} direction="left">
        <DrawerTrigger asChild>
          <Button
            variant="ghost"
            className="lg:hidden fixed top-4 left-4 z-50"
            size="icon"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="h-full w-[240px] mt-0 rounded-none border-r">
          <div className="p-0 h-full">
            <SideBar onItemClick={() => setMobileOpen(false)} />
          </div>
        </DrawerContent>
      </Drawer>

      {/* Main Content */}
      <div
        className={cn("flex-1 min-w-0 transition-all duration-300", "lg:ml-0")}
      >
        {/* Topbar */}
        <div className="flex items-center justify-between bg-background p-4 shadow-sm border-b mb-4 sticky top-0 z-40">
          <div>
            <p className="text-sm text-muted-foreground">
              Hey, {userData.fullName}
            </p>
            <p className="font-semibold text-lg">Welcome to Dashboard</p>
          </div>

          <div className="flex items-center gap-5">
            {/* Notification */}
            <Link href={`/dashboard/${userData.user.role}/notifications`}>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5 text-muted-foreground" />
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                >
                  2
                </Badge>
              </Button>
            </Link>

            {/* Dining link */}
            {!["moderator", "student"].includes(userData.user.role) && (
              <Link href="/dining">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Utensils className="h-5 w-5" />
                </Button>
              </Link>
            )}

            {/* Avatar and Account */}
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9">
                <AvatarImage
                  src={userData.profileImg}
                  alt={userData.fullName}
                />
                <AvatarFallback>
                  {userData.fullName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="hidden sm:block text-sm leading-tight">
                <div className="font-medium">{userData.fullName}</div>
                <div className="text-muted-foreground text-xs capitalize">
                  {userData.designation} — {userData.role}
                </div>
              </div>
              <AccountMenu />
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-4 lg:p-6">{children}</div>
      </div>
    </div>
  );
}
