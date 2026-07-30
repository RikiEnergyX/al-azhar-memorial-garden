import { onRequestOptions as __api_leads_js_onRequestOptions } from "/home/me/qwen/amg/functions/api/leads.js"
import { onRequestPost as __api_leads_js_onRequestPost } from "/home/me/qwen/amg/functions/api/leads.js"

export const routes = [
    {
      routePath: "/api/leads",
      mountPath: "/api",
      method: "OPTIONS",
      middlewares: [],
      modules: [__api_leads_js_onRequestOptions],
    },
  {
      routePath: "/api/leads",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_leads_js_onRequestPost],
    },
  ]