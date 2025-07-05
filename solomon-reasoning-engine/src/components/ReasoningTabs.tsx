import { useState } from 'react';
import WisdomThread from './WisdomThread';

export default function ReasoningTabs() {
  const [tab, setTab] = useState<'thread' | 'about'>('thread');

  return (
    <div className="w-full">
      <div className="flex border-b mb-4">
        <button
          className={`px-4 py-2 ${tab === 'thread' ? 'border-b-2 font-semibold' : ''}`}
          onClick={() => setTab('thread')}
        >
          Thread
        </button>
        <button
          className={`px-4 py-2 ${tab === 'about' ? 'border-b-2 font-semibold' : ''}`}
          onClick={() => setTab('about')}
        >
          About
        </button>
      </div>
      {tab === 'thread' && (
        <WisdomThread />
      )}
      {tab === 'about' && (
        <div className="p-4">Toggle between tabs to explore the Wisdom Thread.</div>
      )}
    </div>
  );
}
