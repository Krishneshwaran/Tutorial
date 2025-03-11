"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Award,
  BookOpen,
  Briefcase,
  Code2,
  FileCode2,
  Home,
  type LucideIcon,
  MessageSquare,
  Settings,
  Trophy,
  User,
  Zap,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type NavItem = {
  title: string
  href: string
  icon: LucideIcon
  isActive?: boolean
  submenu?: {
    title: string
    href: string
    isActive?: boolean
  }[]
}

const mainNavItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Learn",
    href: "/learn",
    icon: BookOpen,
    submenu: [
      { title: "HTML", href: "/learn/html" },
      { title: "CSS", href: "/learn/css" },
      { title: "JavaScript", href: "/learn/javascript" },
      { title: "Python", href: "/learn/python" },
      { title: "SQL", href: "/learn/sql" },
    ],
  },
  {
    title: "Problems",
    href: "/problems",
    icon: Code2,
    submenu: [
      { title: "Easy", href: "/problems/easy" },
      { title: "Medium", href: "/problems/medium" },
      { title: "Hard", href: "/problems/hard" },
    ],
  },
  {
    title: "Contests",
    href: "/contests",
    icon: Trophy,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: FileCode2,
  },
  {
    title: "Discussion",
    href: "/discussion",
    icon: MessageSquare,
  },
  {
    title: "Certifications",
    href: "/certifications",
    icon: Award,
  },
  {
    title: "Jobs",
    href: "/jobs",
    icon: Briefcase,
  },
  {
    title: "AI Mentor",
    href: "/aimentor",
    icon: Zap,
  },
]

const userNavItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: User,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
]

export function MainSidebar() {
  const pathname = usePathname()

  // Mark active items based on current path
  const mainNavWithActive = React.useMemo(
    () =>
      mainNavItems.map((item) => ({
        ...item,
        isActive: pathname === item.href,
        submenu: item.submenu?.map((subitem) => ({
          ...subitem,
          isActive: pathname === subitem.href,
        })),
      })),
    [pathname],
  )

  const userNavWithActive = React.useMemo(
    () =>
      userNavItems.map((item) => ({
        ...item,
        isActive: pathname === item.href,
      })),
    [pathname],
  )

  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
              <Code2 className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold">CodeLearn</span>
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavWithActive.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.isActive} tooltip={item.title}>
                    <Link href={item.href}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>

                  {item.submenu && item.submenu.length > 0 && (
                    <SidebarMenuSub>
                      {item.submenu.map((subitem) => (
                        <SidebarMenuSubItem key={subitem.title}>
                          <SidebarMenuSubButton asChild isActive={subitem.isActive}>
                            <Link href={subitem.href}>{subitem.title}</Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {userNavWithActive.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.isActive} tooltip={item.title}>
                    <Link href={item.href}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex items-center gap-2 p-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">User Name</span>
            <span className="text-xs text-muted-foreground">Free Plan</span>
          </div>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

