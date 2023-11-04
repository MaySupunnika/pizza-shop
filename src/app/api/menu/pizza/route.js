import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const { name, image, description, price, userId } = body;

  try {
    const pizzaData = await prisma.pizza.create({
      data: {
        name,
        image,
        description,
        price,
        userId,
      },
    });
    return NextResponse.json(pizzaData);
  } catch (error) {
    console.log("Error creating pizza", error);
    return NextResponse.error();
  }
}

export async function GET() {
  try {
    const pizzaData = await prisma.pizza.findMany({
      include: {
        PizzaSize: true,
      },
    });
    return NextResponse.json(pizzaData);
  } catch (error) {
    console.log("Error getting pizza", error);
  }
}
