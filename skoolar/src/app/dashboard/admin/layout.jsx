import DashboardAdminProtected from "../../../components/DashboardAdminProtected";

const DashboardLayout = ({ children }) => {
  return (
    <DashboardAdminProtected>
      <section className="flex h-screen w-full">
        <main className="h-full w-full overflow-auto bg-white p-4 dark:bg-zinc-900/30">
          {children}
        </main>
      </section>
    </DashboardAdminProtected>
  );
};

export default DashboardLayout;
