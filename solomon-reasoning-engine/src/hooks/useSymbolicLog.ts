import { useEffect, useState } from 'react';
import { symbolicLogger, SymbolicLog } from '../lib/symbolicLogger';

export function useSymbolicLog(interval = 1000, filter?: Partial<SymbolicLog>) {
  const [logs, setLogs] = useState<SymbolicLog[]>(symbolicLogger.getLogs(filter));

  useEffect(() => {
    const id = setInterval(() => {
      setLogs(symbolicLogger.getLogs(filter));
    }, interval);
    return () => clearInterval(id);
  }, [interval, filter]);

  return logs;
}
