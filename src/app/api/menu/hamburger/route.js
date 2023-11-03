import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const { name, image, description, price, userId } = body;

  try {
    const hamburgerData = await prisma.hamburger.create({
      data: {
        name,
        image,
        description,
        price,
        userId,
      },
    });
    return NextResponse.json(hamburgerData);
  } catch (error) {
    console.log("Error creating hamburger", error);
    return NextResponse.error();
  }
}
