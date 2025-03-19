import Link from "next/link";
import Button from "../_components/Button";

export default function DashboardPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="mb-4">This is the dashboard page.</p>

      <div className="flex gap-4">
        <Link href="/dashboard/modal-a">
          <Button>Open A</Button>
        </Link>
      </div>
    </div>
  );
}
