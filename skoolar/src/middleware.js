"use server";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

export const middleware = async (request) => {
  // console.log("Middleware triggered for URL:", request.url);

  // Memeriksa apakah URL mengandung `/api`
  if (request.url.includes("/api")) {
    // console.log("Processing /api request");

    const cookiesStore = cookies();
    const access_token = cookiesStore.get("access_token");
    // console.log("Access Token:", access_token);

    if (!access_token) {
      // console.log("No access token found");
      return NextResponse.json({
        statusCode: 401,
        error: "Unauthorized",
      });
    }

    try {
      // Verifikasi JWT menggunakan jose
      const { payload } = await jwtVerify(
        access_token.value,
        new TextEncoder().encode(ACCESS_TOKEN_SECRET)
      );
      // console.log("Token payload:", payload);

      // Tambahkan data ke headers
      const requestHeaders = new Headers(request.headers);
      requestHeaders.set("x-user-email", payload.email);
      requestHeaders.set("x-user-id", payload.id);
      requestHeaders.set("x-user-nisn", payload.NISN);
      if (payload.role) {
        requestHeaders.set("x-user-role", payload.role);
      }

      return NextResponse.next({
        headers: requestHeaders,
      });
    } catch (error) {
      // console.log("Token verification failed:", error);
      return NextResponse.json({
        statusCode: 401,
        error: "Invalid token",
      });
    }
  }

  // Lanjutkan ke handler berikutnya jika URL tidak mengandung `/api`
  // console.log("Request does not match /api");
  return NextResponse.next();
};
