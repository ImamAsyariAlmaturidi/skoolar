import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyAccessToken } from "../db/utils/jwt";

const ServerProtectedComponents = ({ children }) => {
  // Membaca cookies
  const cookiesStore = cookies();

  // Mengambil token dari cookies
  const token = cookiesStore.get("access_token");
  // Mengecek apabila token tidak ada, maka redirect ke halaman login
  if (!token || token.value.length <= 0) {
    redirect("/login");
  }

  const user = verifyAccessToken(token.value);

  if (!user.role) {
    redirect("/dashboard/parent");
  }

  // Di sini kita hanya akan mengembalikan children
  return <>{children}</>;
};

export default ServerProtectedComponents;
