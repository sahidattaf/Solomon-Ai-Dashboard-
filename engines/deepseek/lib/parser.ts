export const parseSteps = (rawOutput: string): any[] => {
  return rawOutput.split('\n').map((line, idx) => ({ id: `${idx}`, thought: line }));
};
