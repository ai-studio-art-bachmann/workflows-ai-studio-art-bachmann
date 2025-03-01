import { NextRequest, NextResponse } from "next/server";

// N8N webhook URL
const N8N_WEBHOOK_URL = "https://joosep.app.n8n.cloud/webhook/chat-webhook";

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

    console.log("API received message:", message);

    // Test ping message - kohe vastus
    if (message === "ping") {
      return NextResponse.json({ response: "pong" });
    }

    // Forward the message to n8n
    console.log("Forwarding to n8n:", N8N_WEBHOOK_URL);
    try {
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

      console.log("N8N response status:", n8nResponse.status);

      if (!n8nResponse.ok) {
        const errorText = await n8nResponse.text();
        console.error("N8N Error:", errorText);
        return NextResponse.json(
          { response: "Ei saanud ühendust töövoo serveriga. Proovige hiljem uuesti." },
          { status: 200 } // Saadame 200 OK, et vältida kliendi viga
        );
      }

      // Return the n8n response
      try {
        const data = await n8nResponse.json();
        console.log("N8N response data:", data);
        return NextResponse.json(data);
      } catch (parseError) {
        console.error("Failed to parse N8N response:", parseError);
        
        // Kui JSON parse ebaõnnestub, proovime teksti tagastada
        try {
          const text = await n8nResponse.text();
          console.log("N8N response text:", text);
          return NextResponse.json({ response: text || "Töövoog vastas, kuid vastust ei saanud töödelda." });
        } catch (textError) {
          console.error("Failed to get response text:", textError);
          return NextResponse.json({ 
            response: "Työntekijä-assistentti on vastaanottanut viestisi, mutta ei pysty tällä hetkellä vastaamaan."
          });
        }
      }
    } catch (n8nError) {
      console.error("N8N fetch error:", n8nError);
      return NextResponse.json(
        { response: "Ei saanud ühendust töövoo serveriga. Proovige hiljem uuesti." },
        { status: 200 } // Saadame 200 OK, et vältida kliendi viga
      );
    }
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { response: "Palvelun käsittelyssä ilmeni virhe. Yritä myöhemmin uudelleen." },
      { status: 200 } // Saadame 200 OK, et vältida kliendi viga
    );
  }
}
