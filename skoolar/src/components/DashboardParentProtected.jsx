import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyAccessToken } from "../db/utils/jwt";

const DashboardParentProtected = ({ children }) => {
  // Membaca cookies
  const cookiesStore = cookies();

  // Mengambil token dari cookies
  const token = cookiesStore.get("access_token");
  // Mengecek apabila token tidak ada, maka redirect ke halaman login
  if (!token || token.value.length <= 0) {
    redirect("/login");
  } else {
    const user = verifyAccessToken(token.value);
    if (user.role === "admin") {
      redirect("/dashboard/admin");
    } else if (user.role === "teacher") {
      redirect("/dashboard/teacher");
    }
  }

  // redirect("/dashboard/parent");
  return <>{children}</>;
};

export default DashboardParentProtected;
