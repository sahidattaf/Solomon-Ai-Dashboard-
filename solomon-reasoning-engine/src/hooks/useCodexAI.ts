import { useState } from "react";

export function useCodexAI() {
  const [log, setLog] = useState<string[]>([]);

  const runCodexCycle = () => {
    setLog((prev) => [...prev, "Wisdom cycle activated"]);
  };

  return { log, runCodexCycle };
}
