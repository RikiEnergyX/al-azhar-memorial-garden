import { onRequestOptions as __api_leads_js_onRequestOptions } from "/home/me/qwen/amg/functions/api/leads.js"
import { onRequestPost as __api_leads_js_onRequestPost } from "/home/me/qwen/amg/functions/api/leads.js"
import { onRequest as ___middleware_js_onRequest } from "/home/me/qwen/amg/functions/_middleware.js"

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
  {
      routePath: "/",
      mountPath: "/",
      method: "",
      middlewares: [___middleware_js_onRequest],
      modules: [],
    },
  ]