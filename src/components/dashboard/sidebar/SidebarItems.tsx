"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DrawerItem } from "@/types";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

type SidebarItemProps = {
  item: DrawerItem;
  onItemClick?: () => void;
};

const SidebarItem = ({ item, onItemClick }: SidebarItemProps) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const hasChildren = item.children && item.children.length > 0;
  const isActive = pathname === `/dashboard/${item.path}`;
  
  // Check if any child is active
  const isChildActive = item.children?.some(
    child => pathname === `/dashboard/${child.path}`
  );

  const handleItemClick = () => {
    if (hasChildren) {
      setIsOpen(!isOpen);
    } else {
      onItemClick?.();
    }
  };

  if (hasChildren) {
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="group">
        <div className={cn(
          "mb-1 rounded-lg transition-colors",
          (isActive || isChildActive) && "bg-muted/50"
        )}>
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-between h-10 px-3 font-normal",
                "hover:bg-muted/80 transition-colors",
                (isActive || isChildActive) && "bg-muted text-primary font-medium"
              )}
              onClick={handleItemClick}
            >
              <div className="flex items-center gap-3">
                {item.icon && (
                  <item.icon className={cn(
                    "h-4 w-4 transition-colors",
                    (isActive || isChildActive) ? "text-primary" : "text-muted-foreground"
                  )} />
                )}
                <span className="text-sm">{item.title}</span>
              </div>
              <ChevronDown className={cn(
                "h-4 w-4 transition-transform duration-200",
                isOpen ? "rotate-0" : "-rotate-90",
                (isActive || isChildActive) ? "text-primary" : "text-muted-foreground"
              )} />
            </Button>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="CollapsibleContent">
            <div className="ml-3 mt-1 space-y-1 border-l-2 border-muted pl-3">
              {item.children!.map((child, index) => (
                <SidebarItem key={index} item={child} onItemClick={onItemClick} />
              ))}
            </div>
          </CollapsibleContent>
        </div>
      </Collapsible>
    );
  }

  return (
    <div className={cn("mb-1 rounded-lg", isActive && "bg-muted/50")}>
      <Link href={`/dashboard/${item.path}`} onClick={handleItemClick}>
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start h-10 px-3 font-normal",
            "hover:bg-muted/80 transition-colors",
            isActive && "bg-muted text-primary font-medium"
          )}
        >
          <div className="flex items-center gap-3">
            {item.icon && (
              <item.icon className={cn(
                "h-4 w-4 transition-colors",
                isActive ? "text-primary" : "text-muted-foreground"
              )} />
            )}
            <span className="text-sm">{item.title}</span>
          </div>
        </Button>
      </Link>
    </div>
  );
};

export default SidebarItem;