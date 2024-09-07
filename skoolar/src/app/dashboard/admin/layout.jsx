import DashboardAdminProtected from "../../../components/DashboardAdminProtected";
import SidebarAdmin from "../../../components/SidebarAdmin"
const DashboardLayout = ({ children }) => {
  return (
    <DashboardAdminProtected>
      <section className="flex h-screen w-full bg-[#F0F6FE]">
        <main className="h-full w-full bg-[#F0F6FE]  flex px-3 py-10">

          <SidebarAdmin />
          {children}
        </main>
      </section>
    </DashboardAdminProtected>
  );
};

export default DashboardLayout;
