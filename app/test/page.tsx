'use client';

import { useState, useEffect } from 'react';

export default function TestPage() {
  const [webhookUrl, setWebhookUrl] = useState("https://joosep.app.n8n.cloud/webhook/2e6d9caa-dde9-4d59-8a61-368fa1d89ab4");
  const [testMessage, setTestMessage] = useState("Tere, kas see sõnum jõuab kohale?");
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    setLogs(prev => [...prev, `${new Date().toISOString().split('T')[1].split('.')[0]} - ${message}`]);
  };

  const testConnection = async () => {
    setLoading(true);
    setError(null);
    
    try {
      addLog(`Sending test request to ${webhookUrl}`);
      
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: testMessage,
          test: true,
          timestamp: new Date().toISOString()
        }),
      });
      
      addLog(`Response status: ${res.status}`);
      
      let data;
      const contentType = res.headers.get('content-type');
      
      if (contentType && contentType.includes('application/json')) {
        data = await res.json();
        addLog('Received JSON response');
      } else {
        const text = await res.text();
        data = { rawText: text };
        addLog('Received text response');
      }
      
      setResponse(data);
    } catch (err) {
      addLog(`Error: ${err instanceof Error ? err.message : String(err)}`);
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  const clearLogs = () => {
    setLogs([]);
    setResponse(null);
    setError(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">n8n Webhook Test</h1>
      
      <div className="mb-8">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Webhook URL</label>
          <input
            type="text"
            value={webhookUrl}
            onChange={(e) => setWebhookUrl(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Test Message</label>
          <textarea
            value={testMessage}
            onChange={(e) => setTestMessage(e.target.value)}
            className="w-full p-2 border rounded h-24"
          />
        </div>
        
        <div className="flex space-x-4">
          <button
            onClick={testConnection}
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Testing...' : 'Test Connection'}
          </button>
          
          <button
            onClick={clearLogs}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
          >
            Clear Logs
          </button>
        </div>
      </div>
      
      {error && (
        <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded text-red-700">
          <strong>Error:</strong> {error}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-3">Logs</h2>
          <div className="bg-gray-100 p-4 rounded h-80 overflow-y-auto">
            {logs.length === 0 ? (
              <p className="text-gray-500">No logs yet. Click "Test Connection" to start.</p>
            ) : (
              <ul className="space-y-1">
                {logs.map((log, index) => (
                  <li key={index} className="font-mono text-sm">
                    {log}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-3">Response</h2>
          <div className="bg-gray-100 p-4 rounded h-80 overflow-y-auto">
            {response ? (
              <pre className="whitespace-pre-wrap font-mono text-sm">
                {JSON.stringify(response, null, 2)}
              </pre>
            ) : (
              <p className="text-gray-500">No response yet.</p>
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-medium text-blue-800 mb-2">n8n Response Format Guide</h3>
        <p className="mb-2 text-blue-700">
          For the chat widget to work correctly, the n8n workflow should return one of these formats:
        </p>
        <div className="bg-white p-3 rounded-md mb-2">
          <code className="block whitespace-pre-wrap text-sm">
            {`// Format 1
{
  "response": "Your message text here"
}

// Format 2
{
  "Value": "Your message text here"
}

// Format 3
{
  "message": {
    "content": "Your message text here"
  }
}

// Format 4 (direct string)
"Your message text here"`}
          </code>
        </div>
      </div>
    </div>
  );
}
