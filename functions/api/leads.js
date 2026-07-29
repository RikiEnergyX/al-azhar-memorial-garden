export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

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

    const jsonlLine = JSON.stringify(leadRecord) + "\n";

    // 2. Save into Cloudflare KV / D1 / R2 as JSONL
    const todayKey = `leads_${new Date().toISOString().slice(0, 10)}.jsonl`;

    if (env && env.LEADS_KV) {
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
