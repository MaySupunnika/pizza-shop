import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const { pizzaId, size, price } = body;

  try {
    const pizzaSizeData = await prisma.pizzaSize.create({
      data: {
        pizzaId,
        size,
        price,
      },
    });
    return NextResponse.json(pizzaSizeData);
  } catch (error) {
    console.log("Error creating pizza size", error);
    return NextResponse.error();
  }
}

export async function GET() {
  try {
    const pizzaData = await prisma.pizza.findMany();
    return NextResponse.json(pizzaData);
  } catch (error) {
    console.log("Error getting pizza size", error);
  }
}
