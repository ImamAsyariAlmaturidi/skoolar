"use server";
import { signOut } from "../../auth";
export default async function signInButton() {
  console.log("masuk logout");

  await signOut();
}
