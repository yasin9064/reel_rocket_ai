import ProtectedRoute from "@/components/ProtectedRoute";
import DashboardClient from "@/components/DashboardClient";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardClient />
    </ProtectedRoute>
  );
}
