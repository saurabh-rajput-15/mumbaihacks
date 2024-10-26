'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Laptop } from "lucide-react";

export function MainNav() {
  const pathname = usePathname();

  const routes = [
    {
      href: "/",
      label: "Dashboard",
    },
    {
      href: "/tasks",
      label: "Tasks",
    },
    {
      href: "/wellness",
      label: "Wellness",
    },
    {
      href: "/automation",
      label: "Automation",
    },
    {
      href: "/team",
      label: "Team",
    },
  ];

  return (
    <div className="mr-4 flex items-center space-x-4 lg:space-x-6">
      <Button variant="ghost" className="p-0">
        <Laptop className="h-6 w-6 mr-2" />
        <span className="font-bold">Productive.ai</span>
      </Button>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === route.href
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </div>
  );
}