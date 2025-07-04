import { useMemo } from 'react';

export const useStepTrace = (steps: any[]) => {
  return useMemo(() => steps.map((s, i) => ({ ...s, index: i + 1 })), [steps]);
};
