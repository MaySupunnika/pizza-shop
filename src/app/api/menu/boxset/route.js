import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const { name, image, description, price, userId } = body;

  try {
    const boxsetData = await prisma.boxset.create({
      data: {
        name,
        image,
        description,
        price,
        userId,
      },
    });
    return NextResponse.json(boxsetData);
  } catch (error) {
    console.log("Error creating boxset", error);
    return NextResponse.error();
  }
}

export async function GET() {
  try {
    const boxsetData = await prisma.boxset.findMany();
    return NextResponse.json(boxsetData);
  } catch (error) {
    console.log("Error to GET hamburger", error);
  }
}
