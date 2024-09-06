import ServerProtectedComponents from "../../components/ServerProtectedComponents";

const DashboardLayout = ({ children }) => {
  return (
    <ServerProtectedComponents>
      <section className="flex h-screen w-full">
        <main className="h-full w-full overflow-auto bg-white p-4 dark:bg-zinc-900/30">
          {children}
        </main>
      </section>
    </ServerProtectedComponents>
  );
};

export default DashboardLayout;
