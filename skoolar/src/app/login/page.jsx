import React from "react";
import { doLogin, doLoginAsParent } from "./action";

const page = () => {
  return (
    <form action={doLoginAsParent}>
      <input type="text" name="NISN" />
      <input type="text" name="password" />
      <button type="submit">login</button>
    </form>
  );
};

export default page;
