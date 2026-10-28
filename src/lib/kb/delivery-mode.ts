// Delivery-mode types and helpers — shared by client components AND the
// /api/chat server route (no "use client" directive here for that reason).

export type DeliveryMode = "csection" | "vaginal";

export const MODE_STORAGE_KEY = "healing-thali-delivery-mode";

export const MODE_LABELS: Record<DeliveryMode, string> = {
  csection: "C-Section",
  vaginal: "Normal Delivery",
};

export function isDeliveryMode(v: unknown): v is DeliveryMode {
  return v === "csection" || v === "vaginal";
}
