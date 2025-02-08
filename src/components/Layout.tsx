
import { SidebarProvider } from "@/components/ui/sidebar";
import Sidebar from "./Sidebar";
import { Toaster } from "@/components/ui/sonner";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <Sidebar />
        <main className="flex-1 overflow-hidden">
          <div className="container h-full py-6 px-8">
            {children}
          </div>
        </main>
        <Toaster />
      </div>
    </SidebarProvider>
  );
}
