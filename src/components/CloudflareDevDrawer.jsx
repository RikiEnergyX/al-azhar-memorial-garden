import React, { useState } from 'react';
import { Terminal, Copy, Check, ChevronUp, ChevronDown, Server, Code, Zap } from 'lucide-react';

export default function CloudflareDevDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [testResult, setTestResult] = useState(null);
  const [testing, setTesting] = useState(false);

  const workerCode = `// Cloudflare Worker Handler: src/index.js (or functions/api/leads.js)
export default {
  async fetch(request, env, ctx) {
    // Enable CORS
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method === "POST" && new URL(request.url).pathname === "/api/leads") {
      try {
        const body = await request.json();

        // 1. Construct JSONL record
        const leadRecord = {
          timestamp: new Date().toISOString(),
          name: body.name || "N/A",
          whatsapp: body.whatsapp || "N/A",
          city: body.city || "N/A",
          needType: body.needType || "Pre-Need",
          plotType: body.plotType || "Single",
          sourceUrl: body.sourceUrl || request.headers.get("Referer") || "Direct",
          ip: request.headers.get("CF-Connecting-IP") || "Anonymous"
        };

        const jsonlLine = JSON.stringify(leadRecord) + "\\n";

        // 2. Save into Cloudflare KV / D1 / R2 as JSONL
        const todayKey = \`leads_\${new Date().toISOString().slice(0, 10)}.jsonl\`;

        // Example appending to KV (or use D1 DB / R2 bucket)
        if (env.LEADS_KV) {
          const existing = (await env.LEADS_KV.get(todayKey)) || "";
          await env.LEADS_KV.put(todayKey, existing + jsonlLine);
        }

        return new Response(
          JSON.stringify({ success: true, message: "Lead recorded successfully", record: leadRecord }),
          { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      } catch (err) {
        return new Response(
          JSON.stringify({ success: false, error: err.message }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    }

    return new Response("Method not allowed", { status: 405, headers: corsHeaders });
  }
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(workerCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTestApi = async () => {
    setTesting(true);
    setTestResult(null);
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Test Lead Agent',
          whatsapp: '081310091299',
          city: 'Jakarta',
          needType: 'Pre-Need Test',
          plotType: 'Single Plot'
        })
      });
      const data = await res.json();
      setTestResult({ status: res.status, data });
    } catch (err) {
      setTestResult({ status: 'Error', error: err.message });
    }
    setTesting(false);
  };

  return (
    <div className="bg-gray-900 border-t border-gray-800 text-gray-300 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Toggle Bar */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full py-3 flex items-center justify-between hover:text-white transition-colors focus:outline-none"
        >
          <div className="flex items-center gap-2 font-mono text-emerald-400">
            <Server className="w-4 h-4" />
            <span>Cloudflare Workers Backend Spec & JSONL Handler (/api/leads)</span>
            <span className="bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded text-[10px] font-bold border border-emerald-800">
              Free Tier Ready
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] text-gray-500 font-medium">
              {isOpen ? 'Sembunyikan Kode Worker' : 'Tampilkan Kode Worker & Test API'}
            </span>
            {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          </div>
        </button>

        {/* Drawer Content */}
        {isOpen && (
          <div className="pb-8 pt-2 space-y-4 animate-fadeIn border-t border-gray-800">
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <p className="text-gray-400 text-xs">
                Kode backend ini disiapkan untuk <strong>Cloudflare Workers / Pages Functions</strong>. Data lead disimpan secara konsisten dalam format <strong>JSONL</strong> (JSON Lines) ke Cloudflare KV / D1 / R2.
              </p>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleTestApi}
                  disabled={testing}
                  className="px-3 py-1.5 rounded-lg bg-emerald-700 text-white font-bold hover:bg-emerald-600 transition-all flex items-center gap-1.5"
                >
                  <Zap className="w-3.5 h-3.5 text-yellow-300" />
                  <span>{testing ? 'Testing...' : 'Test Local API Endpoint'}</span>
                </button>

                <button
                  onClick={handleCopy}
                  className="px-3 py-1.5 rounded-lg bg-gray-800 text-white font-bold hover:bg-gray-700 transition-all flex items-center gap-1.5 border border-gray-700"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-gray-400" />}
                  <span>{copied ? 'Copied!' : 'Salin Kode Worker'}</span>
                </button>
              </div>
            </div>

            {/* Test Result Banner */}
            {testResult && (
              <div className="p-3 rounded-xl bg-gray-800 border border-emerald-500/40 font-mono text-[11px]">
                <div className="flex items-center justify-between text-emerald-400 font-bold mb-1">
                  <span>API Response Status: {testResult.status}</span>
                  <span>/api/leads Endpoint Test</span>
                </div>
                <pre className="text-gray-300 whitespace-pre-wrap">
                  {JSON.stringify(testResult.data || testResult.error, null, 2)}
                </pre>
              </div>
            )}

            {/* Code Block */}
            <div className="relative rounded-2xl bg-black border border-gray-800 p-4 font-mono text-[11px] overflow-x-auto text-emerald-300">
              <pre>{workerCode}</pre>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
