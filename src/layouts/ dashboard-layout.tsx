import { Sidebar } from "@/components/ui/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
  role,
}: {
  children: React.ReactNode;
  role: string;
}) {
  return (
    <SidebarProvider>
      <div className="flex">
        <Sidebar side="right" role={role} />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </SidebarProvider>
  );
}
