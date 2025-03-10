import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // N8N webhook URL
    const N8N_WEBHOOK_URL = 'https://art-bachmann1-agent.app.n8n.cloud/webhook-test/chat-webhook';
    
    // Forward the request to n8n
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    
    // Check if the response is OK
    if (!response.ok) {
      throw new Error(`N8N API responded with status: ${response.status}`);
    }
    
    // Parse the response
    let responseData;
    try {
      responseData = await response.json();
    } catch (e) {
      const text = await response.text();
      responseData = { message: text };
    }
    
    // Return the response
    return NextResponse.json(responseData);
  } catch (error) {
    console.error('Error in n8n-agent API route:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
