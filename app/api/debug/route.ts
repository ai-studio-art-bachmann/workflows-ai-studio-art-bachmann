import { NextRequest, NextResponse } from "next/server";

// Debug API endpoint to log and inspect incoming requests
export async function POST(req: NextRequest) {
  try {
    // Get request body
    const body = await req.json();
    
    // Log the request for debugging
    console.log("Debug API received request:", {
      body,
      headers: Object.fromEntries(req.headers.entries()),
      method: req.method,
      url: req.url
    });
    
    // Return the request body as response for inspection
    return NextResponse.json({
      success: true,
      message: "Debug request received and logged",
      receivedData: body,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error("Error in debug API:", error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : "Unknown error" 
      },
      { status: 500 }
    );
  }
}

// Also handle GET requests for testing connection
export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Debug API is working",
    timestamp: new Date().toISOString()
  });
}
