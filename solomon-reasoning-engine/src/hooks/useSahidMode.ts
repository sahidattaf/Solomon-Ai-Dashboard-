import { useState, useCallback } from 'react';
import { SahidEngine, SahidConfig } from '../lib/engines/sahid';

/**
 * Hook for interacting with the Sahid-mode reasoning engine.
 * @returns run function to trigger reasoning, and state: result, loading, error.
 */
export function useSahidMode() {
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  /**
   * Runs the Sahid reasoning engine on the provided prompt.
   * @param prompt The user query or statement to reason about.
   * @param config Optional configuration for the engine.
   */
  const run = useCallback(
    async (prompt: string, config?: Partial<SahidConfig>) => {
      setLoading(true);
      setError(null);
      try {
        // Initialize Sahid engine with default config merged with user overrides
        const sahidConfig: SahidConfig = {
          maxSteps: 20,
          temperature: 0.7,
          chainName: 'sahid',
          ...config,
        };
        const engine = new SahidEngine(sahidConfig);
        const output = await engine.run(prompt);
        setResult(output);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { run, result, loading, error };
}
