import HeaderDashboard from "@/components/elements/HeaderDashboard";
import Sidebar from "@/components/elements/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <HeaderDashboard />
        {children}
      </div>
    </div>
  );
}
