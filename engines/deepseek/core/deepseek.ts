import { buildPrompt } from './promptBuilder';
import { parseSteps } from '../lib/parser';
import { selfReflector } from '../agents/selfReflector';

export const runDeepSeek = async (input: string, agent: string = 'default') => {
  const prompt = buildPrompt(input);
  const rawOutput = input; // placeholder for real engine output
  const steps = parseSteps(rawOutput);
  let result = `Processed by ${agent}: ${input}`;

  if (agent === 'selfReflector') {
    result = selfReflector(steps);
  }

  return { result, steps, prompt };
};
