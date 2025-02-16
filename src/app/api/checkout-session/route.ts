import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-01-27.acacia",
});

export async function POST(req: Request) {
  try {
    const { origin } = new URL(req.headers.get("referer") || "http://localhost:3000");

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Product Name",
            },
            unit_amount: 5000,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/success`, 
      cancel_url: `${origin}/cancel`,   
    });

    return NextResponse.json({ id: session.id });
  } catch (error) {
    console.error("Stripe Checkout Session Error:", error); 
    return NextResponse.json({ error: (error as Error).message || "Failed to create session" }, { status: 500 });
  }
}
