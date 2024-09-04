// import { signAccessToken, signRefreshToken } from "@/utils/jwt";
// import { getUserByEmail } from "@/db/models/User";
// import { compareTextWithHash } from "@/utils/bcrypt";
"use server";
import { getParentByNISN } from "../../db/models/Parent";
import { signAccessToken, signRefreshToken } from "../../db/utils/jwt";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { comparePassword } from "../../db/utils/bcrypt";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const doLoginAsParent = async (formData) => {
  console.log(formData);
  const NISN = formData.get("NISN");
  const password = formData.get("password");

  // if (!parsedData.success) {
  //   const errPath = parsedData.error.issues[0].path[0];
  //   const errMessage = parsedData.error.issues[0].message;
  //   const errFinalMessage = `${errPath} - ${errMessage}`;

  //   return redirect(`${BASE_URL}/login?error=${errFinalMessage}`);
  // }

  const user = await getParentByNISN(NISN);
  console.log(user);

  if (!user || !comparePassword(password, user.password)) {
    return redirect(`${BASE_URL}/login?error=Invalid%20credentials`);
  }

  const payload = { id: user._id, NISN: user.NISN, email: user.email };

  const accessToken = signAccessToken(payload);
  const refreshToken = signRefreshToken(payload);

  cookies().set("access_token", accessToken, {
    httpOnly: true,
    secure: false,
    expires: new Date(Date.now() + 1000 * 60 * 15),
    sameSite: "strict",
  });

  cookies().set("refresh_token", refreshToken, {
    httpOnly: true,
    secure: false,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    sameSite: "strict",
  });

  return redirect(`${BASE_URL}/dashboard/admin`);
};
