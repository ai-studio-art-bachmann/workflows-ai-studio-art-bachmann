import { NextRequest, NextResponse } from "next/server";

// N8N webhook URL
const N8N_WEBHOOK_URL = "https://joosep.app.n8n.cloud/webhook-test/2e6d9caa-dde9-4d59-8a61-368fa1d89ab4";

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const body = await req.json();
    const { message } = body;

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Forward the message to n8n
    const n8nResponse = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
        user: "guest@example.com", // Default guest user
        timestamp: new Date().toISOString(),
      }),
    });

    if (!n8nResponse.ok) {
      console.error("N8N Error:", await n8nResponse.text());
      return NextResponse.json(
        { error: "Error communicating with workflow service" },
        { status: 502 }
      );
    }

    // Return the n8n response
    const data = await n8nResponse.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
