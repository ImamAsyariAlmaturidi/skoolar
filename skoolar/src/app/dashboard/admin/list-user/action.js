"use server"

import { cookies } from "next/headers";

export default async function getAllUser(params) {
    try {
        const response = await fetch('http://localhost:3000/api/user', {
            headers: {
                Cookie: cookies().toString()
            }
        })
        const { data } = await response.json();
        const result = data.filter((el) => el.role === "teacher")
        return result
    } catch (error) {
        console.log(error);

    }
}