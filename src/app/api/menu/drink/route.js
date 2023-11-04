import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const { name, image, description, price, userId } = body;

  try {
    const drinkData = await prisma.drink.create({
      data: {
        name,
        image,
        description,
        price,
        userId,
      },
    });
    return NextResponse.json(drinkData);
  } catch (error) {
    console.log("Error creating drink", error);
    return NextResponse.error();
  }
}

export async function GET() {
  try {
    const drinkData = await prisma.drink.findMany();
    return NextResponse.json(drinkData);
  } catch (error) {
    console.log("Error to GET hamburger", error);
  }
}
