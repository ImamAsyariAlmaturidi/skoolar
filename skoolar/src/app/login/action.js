"use server";
import { getParentByNISN } from "../../db/models/Parent";
import { signAccessToken, signRefreshToken } from "../../db/utils/jwt";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { comparePassword } from "../../db/utils/bcrypt";
import { getUserByNIK } from "../../db/models/User";
import Joi from "joi";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const schemaParentInput = Joi.object({
  NISN: Joi.string().required().min(3),
  password: Joi.string().required().min(4),
});
export const doLoginAsParent = async (formData) => {
  const NISN = formData.get("NISN");
  const password = formData.get("password");

  console.log(NISN, password);

  const parsedData = schemaParentInput.validate({ NISN, password });
  if (parsedData.error) {
    const errPath = parsedData.error.details[0].path[0];
    const errMessage = parsedData.error.details[0].message;
    const errFinalMessage = `${errPath} - ${errMessage}`;

    return redirect(`${BASE_URL}/login?error=${errFinalMessage}`);
  }

  const user = await getParentByNISN(NISN);

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

  return redirect(`${BASE_URL}/dashboard/parent`);
};

const schemaSchoolInput = Joi.object({
  NIK: Joi.string().required().min(5),
  password: Joi.string().required().min(4),
});
export const doLoginAsSchool = async (formData) => {
  // console.log(formData);
  const NIK = formData.get("NIK");
  const password = formData.get("password");

  const parsedData = schemaSchoolInput.validate({ NIK, password });
  if (parsedData.error) {
    const errPath = parsedData.error.details[0].path[0];
    const errMessage = parsedData.error.details[0].message;
    const errFinalMessage = `${errPath} - ${errMessage}`;

    return redirect(`${BASE_URL}/login?error=${errFinalMessage}`);
  }

  const user = await getUserByNIK(NIK);

  if (!user || !comparePassword(password, user.password)) {
    return redirect(`${BASE_URL}/login?error=Invalid%20credentials`);
  }

  const payload = {
    id: user._id,
    NIK: user.NIK,
    email: user.email,
    role: user.role,
  };

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

  if (user.role === "admin") {
    return redirect(`${BASE_URL}/dashboard/admin`);
  } else if (user.role === "teacher") {
    return redirect(`${BASE_URL}/dashboard/teacher`);
  }
  return redirect(`${BASE_URL}/dashboard/parent`);
};

export async function doLogout() {
  const store = cookies();
  const token = store.get("access_token");
  // console.log(token);
  if (token) {
    store.delete("access_token");
  }
  redirect("/login");
}
