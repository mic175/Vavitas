import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Trustpilot?: {
      loadFromElement: (el: HTMLElement, forceReload?: boolean) => void;
    };
  }
}

const SCRIPT_SRC = "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
const SCRIPT_ID = "trustpilot-bootstrap";

let scriptPromise: Promise<void> | null = null;

const loadScript = () => {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.Trustpilot) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise<void>((resolve) => {
    const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener("load", () => resolve());
      if (window.Trustpilot) resolve();
      return;
    }
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = SCRIPT_SRC;
    script.async = true;
    script.onload = () => resolve();
    document.head.appendChild(script);
  });

  return scriptPromise;
};

/**
 * Trustpilot Review Collector widget.
 * Loads the official Trustpilot bootstrap script once per session and
 * re-initializes the embed on mount so it survives SPA route changes.
 */
const TrustpilotWidget = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let cancelled = false;
    loadScript().then(() => {
      if (cancelled || !ref.current) return;
      if (window.Trustpilot) {
        window.Trustpilot.loadFromElement(ref.current, true);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div
      ref={ref}
      className="trustpilot-widget"
      data-locale="en-US"
      data-template-id="56278e9abfbbba0bdcd568bc"
      data-businessunit-id="6a17bd43d38a4b4aab127efc"
      data-style-height="52px"
      data-style-width="100%"
      data-token="a563b43f-9019-434d-8336-480180e595da"
    >
      <a href="https://www.trustpilot.com/review/vavitas-health.com" target="_blank" rel="noopener noreferrer">
        Trustpilot
      </a>
    </div>
  );
};

export default TrustpilotWidget;
