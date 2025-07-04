import { useCallback } from "react";

export function useCodexAI() {
  const deployCodexAgent = useCallback(() => {
    console.log("deployCodexAgent called");
  }, []);

  return {
    deployCodexAgent,
  };
}

