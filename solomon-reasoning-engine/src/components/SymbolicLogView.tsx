import React, { useState } from 'react';
import { symbolicLogger, SymbolicLog } from '../lib/symbolicLogger';
import { useSymbolicLog } from '../hooks/useSymbolicLog';

export default function SymbolicLogView() {
  const [level, setLevel] = useState('');
  const [search, setSearch] = useState('');
  const logs = useSymbolicLog(1000, {
    level: level || undefined,
    message: search || undefined,
  });

  const exportLogs = () => {
    const blob = new Blob([symbolicLogger.export()], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'symbolic-logs.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const shareLogs = async () => {
    await fetch('/api/share-symbolic-logs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: symbolicLogger.export(),
    });
  };

  return (
    <div className="space-y-2">
      <div className="flex space-x-2">
        <input
          className="border px-2 py-1 flex-1"
          placeholder="Filter level"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        />
        <input
          className="border px-2 py-1 flex-1"
          placeholder="Search message"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="border px-2" onClick={exportLogs}>Export</button>
        <button className="border px-2" onClick={shareLogs}>Share</button>
      </div>
      <ul className="text-sm space-y-1 max-h-60 overflow-auto border p-2">
        {logs.map((log, idx) => (
          <li key={idx} className="font-mono">
            {new Date(log.timestamp).toLocaleTimeString()} [{log.level}] {log.message}
          </li>
        ))}
      </ul>
    </div>
  );
}
