export const selfReflector = (steps: any[]): string => {
  return `Reflection: ${steps.map(s => s.thought).join(' -> ')}`;
};
