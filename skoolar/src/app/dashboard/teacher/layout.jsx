import DashboardAdminProtected from "../../../components/DashboardAdminProtected";

const DashboardLayout = ({ children }) => {
  return <DashboardAdminProtected>{children}</DashboardAdminProtected>;
};

export default DashboardLayout;
