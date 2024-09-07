import ServerProtectedComponents from "../../components/ServerProtectedComponents";

const DashboardLayout = ({ children }) => {
  return <ServerProtectedComponents>{children}</ServerProtectedComponents>;
};

export default DashboardLayout;
