"use client";

import Link from "next/link";
import { Menu, SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ThemeModeToggle } from "../shared/ThemeModeToggle";
import { LogIn } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import Image from "next/image";
import logo from "../../../public/images/logo.png";

const menuItems = [
  {
    title: "Home",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "About",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Services",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Portfolio",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Shope",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
];

const Header = () => {
  return (
    <header className="w-full bg-background p-3 px-10">
      <div className="mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="shrink-0">
          <Link href="/" className="text-2xl font-bold text-primary ">
            <Image src={logo.src} alt="logo" width={150} height={150} />
          </Link>
        </div>

        {/* Center: Search Bar with icon */}
        <div className="relative flex-1 max-w-md mx-5">
          <NavigationMenu>
            <NavigationMenuList>
              {menuItems.map((item, i) => (
                <NavigationMenuItem key={i}>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href={item.href}>{item.title}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right: Navigation */}
        <div className="flex gap-x-4">
            <ThemeModeToggle/>
          <Button
            variant={"outline"}
            className="px-6! font-bold flex justify-center items-center rounded-full border border-primary"
          >
            Login <LogIn />
          </Button>

          <Button
            variant={"outline"}
            className="px-6! font-bold flex justify-center items-center rounded-full border border-primary"
          >
            Sign Up <LogIn />
          </Button>

        
        </div>
      </div>
    </header>
  );
};

export default Header;
