import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-01-27.acacia",
});

export async function POST(req: Request) {
  try {
    const { origin } = new URL(req.headers.get("referer") || "http://localhost:3000");

    const { items } = await req.json();
    console.log("Received items from frontend:", items);

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "No items found in the request." }, { status: 400 });
    }

    // ✅ Stripe ke line_items format me fix
    const lineItems = items.map((item, index) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: `Product-${index + 1}`, // ✅ Unique name assign kar diya
          images: item.image ? [item.image] : [],
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity || 1,
    }));

    console.log("Formatted Line Items for Stripe:", lineItems);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${origin}/success`,
      cancel_url: `${origin}/cancel`,
    });

    return NextResponse.json({ id: session.id });
  } catch (error) {
    console.error("Stripe Checkout Session Error:", error);
    return NextResponse.json(
      { error: (error as Error).message || "Failed to create session" },
      { status: 500 }
    );
  }
}
