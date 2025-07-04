import { useState } from 'react';
import { runDeepSeek } from '../core/deepseek';

export const useDeepSeek = () => {
  const [result, setResult] = useState<string | null>(null);
  const [steps, setSteps] = useState<any[]>([]);

  const execute = async (input: string, agent: string = 'default') => {
    const output = await runDeepSeek(input, agent);
    setResult(output.result);
    setSteps(output.steps);
  };

  return { result, steps, execute };
};
