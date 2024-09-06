import bcrypt from "bcrypt";
export const hashingPassword = (payload) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(payload, salt);
};
export const comparePassword = (password, hashPassword) => {
  return bcrypt.compareSync(password, hashPassword);
};
