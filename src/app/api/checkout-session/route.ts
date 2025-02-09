import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-01-27.acacia", // Latest version use karo
  });

export async function POST() {
  try {


    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: "Product Name",
              },
              unit_amount: 5000, // $50.00
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: "http://localhost:3000/success",  // ✅ Success page ka sahi URL
        cancel_url: "http://localhost:3000/cancel",    // ✅ Cancel page ka sahi URL
      });

    return NextResponse.json({ id: session.id });
  } catch {
    return NextResponse.json({ error: "Failed to create session" }, { status: 500 });
  }
}
