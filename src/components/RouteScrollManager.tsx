import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HEADER_OFFSET = 116;

const RouteScrollManager = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToTarget = () => {
      if (location.hash) {
        const id = decodeURIComponent(location.hash.slice(1));
        const element = document.getElementById(id);

        if (element) {
          const top = element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
          window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
          return;
        }
      }

      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    const frame = window.requestAnimationFrame(scrollToTarget);
    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.hash, location.key]);

  return null;
};

export default RouteScrollManager;
