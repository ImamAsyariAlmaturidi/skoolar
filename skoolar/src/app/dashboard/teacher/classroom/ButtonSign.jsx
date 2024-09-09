"use client";
import signInButton from "./actionSignIn";

import { signOut } from "../../auth";
export default function ButtonSign() {
  return <button onClick={signOut}>SignOut</button>;
}
