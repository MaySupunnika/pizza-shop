import prisma from "../../lib/prisma.ts";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, username, email, password, dob } = body;

    const existingUserByEmail = await prisma.users.findUnique({
      where: { email: email },
    });
    if (existingUserByEmail) {
      return NextResponse.json(
        { user: null, message: "User with this email already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10);
    const newUser = await prisma.users.create({
      data: { name, username, email, password: hashedPassword, dob },
    });

    return NextResponse.json(
      { user: newUser, message: "User register successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error registering user", error);
    return NextResponse.error({ error: "Failed to register" }, { status: 500 });
  }
}
