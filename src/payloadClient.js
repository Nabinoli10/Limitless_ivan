// src/payloadClient.js

const CMS_URL = import.meta.env.VITE_CMS_URL || "http://localhost:3000";

async function handleJSON(res) {
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`CMS error ${res.status}: ${text || res.statusText}`);
  }
  return res.json();
}

export async function getGlobal(slug) {
  const res = await fetch(`${CMS_URL}/api/globals/${slug}`, {
    headers: { "Content-Type": "application/json" },
  });
  return handleJSON(res);
}

export async function getCollection(collection, query = "") {
  const res = await fetch(`${CMS_URL}/api/${collection}${query}`, {
    headers: { "Content-Type": "application/json" },
  });
  return handleJSON(res);
}
