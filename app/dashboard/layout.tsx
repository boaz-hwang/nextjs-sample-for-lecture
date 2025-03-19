export default function DashboardLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="dashboard-layout relative">
      {children}
      {modal}
    </div>
  );
}
