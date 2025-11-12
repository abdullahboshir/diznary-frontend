"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { drawerItems } from "@/config/drawerItems";
import SidebarItem from "./SidebarItems";
import { USER_ROLE } from "@/constant/role";
import { cn } from "@/lib/utils";

const SideBar = ({ onItemClick }: { onItemClick?: () => void }) => {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    // const { role } = getUserInfo() as any;
    const role = 'superAdmin';
    setUserRole(role);
  }, []);

  return (
    <div className="w-full h-full flex flex-col bg-background border-r">
      {/* Logo Section */}
      <div className="flex-shrink-0 px-6 py-4 border-b">
        <Link
          href={userRole === "student" ? "/" : "/dining"}
          className="flex items-center gap-3"
          onClick={onItemClick}
        >
          <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
            <Image
              src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg"
              width={32}
              height={32}
              alt="University logo"
              className="rounded"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-semibold tracking-tight">Hall Management</h1>
            <span className="text-xs text-muted-foreground">Admin Portal</span>
          </div>
        </Link>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto">
        <ul className="space-y-1">
          {drawerItems(userRole as any).map((item, index) => (
            <SidebarItem 
              key={index} 
              item={item} 
              onItemClick={onItemClick}
            />
          ))}
        </ul>
      </nav>

      {/* Footer Section (optional) */}
      <div className="flex-shrink-0 p-4 border-t">
        <div className="text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Hall Management
        </div>
      </div>
    </div>
  );
};

export default SideBar;