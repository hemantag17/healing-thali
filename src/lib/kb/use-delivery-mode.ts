"use client";

// Global delivery-mode hook: the site serves both C-section and normal
// (vaginal) deliveries. The user's choice is stored in localStorage so the
// whole site updates content accordingly and the preference survives reloads.

import { useCallback, useSyncExternalStore } from "react";
import {
  MODE_STORAGE_KEY,
  isDeliveryMode,
  type DeliveryMode,
} from "./delivery-mode";

// --- tiny external store over localStorage (same-tab + cross-tab updates) ---

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  // "storage" keeps other tabs in sync; same-tab writes notify manually.
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function getClientSnapshot(): string | null {
  try {
    return window.localStorage.getItem(MODE_STORAGE_KEY);
  } catch {
    return null;
  }
}

function getServerSnapshot(): string | null {
  return null;
}

/** Mode hook — reads the persisted choice and updates the whole site. */
export function useDeliveryMode() {
  const stored = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot
  );

  const mode: DeliveryMode = isDeliveryMode(stored) ? stored : "csection";

  const changeMode = useCallback((m: DeliveryMode) => {
    try {
      window.localStorage.setItem(MODE_STORAGE_KEY, m);
    } catch {
      // private mode / storage disabled — mode still applies for this session
    }
    listeners.forEach((l) => l());
  }, []);

  return { mode, changeMode };
}
