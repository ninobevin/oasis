"use client"

import { SessionProvider, useSession } from "next-auth/react";
import AppSidebar from "@/components/application/ui/navbar/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import SidebarInsetHeader from "@/components/application/ui/navbar/sidebar-inset-header";


export default function applicationLayout({ children }: { children: React.ReactNode }) {
  
    return (
        <>
            <SessionProvider>
                <SidebarProvider>
                    <AppSidebar  />
                       <SidebarInset>
                        <SidebarInsetHeader/>
                            <main className="flex px-4">{ children }</main>
                        </SidebarInset>
                </SidebarProvider>
            </SessionProvider>
        </>
    )

}