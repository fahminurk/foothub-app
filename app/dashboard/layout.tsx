import HeaderDashboard from "@/components/elements/HeaderDashboard";
import Sidebar from "@/components/elements/Sidebar";
import AuthenticatedRoute from "@/components/guards/AuthenticatedRoute";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthenticatedRoute>
      <div className="flex ">
        <Sidebar />
        <div className="w-full overflow-x-hidden">
          <HeaderDashboard />
          {children}
        </div>
      </div>
    </AuthenticatedRoute>
  );
}
