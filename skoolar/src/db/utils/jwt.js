import jwt from "jsonwebtoken";
import * as jose from "jose";
const SECRET_KEY = process.env.SECRET_KEY;
export const signToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY);
};

export const verifyToken = (token) => {
  return jwt.verify(token, SECRET_KEY);
};

export const readPayloadJose = async (token) => {
  const secretKey = new TextEncoder().encode(SECRET_KEY);
  const payloadJose = (await jose.jwtVerify) < T > (token, secretKey);
  return payloadJose.payload;
};
