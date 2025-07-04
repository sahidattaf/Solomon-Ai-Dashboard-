import { useState } from 'react';
import SymbolicLogView from './SymbolicLogView';
import WisdomThread from './WisdomThread';

export default function ReasoningTabs() {
  const [tab, setTab] = useState<'log' | 'wisdom'>('log');

  return (
    <div>
      <div className="flex space-x-2 mb-2">
        <button
          className={`border px-2 ${tab === 'log' ? 'bg-gray-200' : ''}`}
          onClick={() => setTab('log')}
        >
          Symbolic Log
        </button>
        <button
          className={`border px-2 ${tab === 'wisdom' ? 'bg-gray-200' : ''}`}
          onClick={() => setTab('wisdom')}
        >
          Wisdom Thread
        </button>
      </div>
      {tab === 'log' ? <SymbolicLogView /> : <WisdomThread />}
    </div>
  );
}
