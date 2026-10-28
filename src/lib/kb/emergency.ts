// Emergency and mental-health helplines by region.
// This site serves Indian mothers worldwide, so all three regions are shown
// side by side plus a generic line for everywhere else.

export interface EmergencyRegion {
  region: string;
  emergency: string;
  mentalHealth: string;
  extra?: string;
}

export const EMERGENCY_REGIONS: EmergencyRegion[] = [
  {
    region: "India",
    emergency: "112 (national) · 108 (ambulance)",
    mentalHealth: "Tele-MANAS 14416 (24×7, free) · Kiran 1800-599-0019",
  },
  {
    region: "USA",
    emergency: "911",
    mentalHealth: "Suicide & Crisis Lifeline — call or text 988 (24/7)",
  },
  {
    region: "Canada",
    emergency: "911",
    mentalHealth: "Suicide & Crisis Helpline — call or text 988 (24/7)",
    extra: "Nurse health advice: 811 in most provinces",
  },
];

export const EMERGENCY_GENERIC = "Elsewhere: call your local emergency number.";

// Compact one-liner for the printed fridge sheet (must fit one A4 page).
export const EMERGENCY_ONE_LINER =
  "Emergency: India 112 / 108 · USA 911 · Canada 911 —  Mental-health lines (24/7): India Tele-MANAS 14416 · USA & Canada 988 (call or text)";
