import React, { useState } from 'react';
import { useDeepSeek } from '../hooks/useDeepSeek';
import { StepVisualizer } from './StepVisualizer';
import { PromptDisplay } from './PromptDisplay';
import { AgentSelector } from './AgentSelector';
import { buildPrompt } from '../core/promptBuilder';

export const DeepSeekPage = () => {
  const [input, setInput] = useState('');
  const [agent, setAgent] = useState('default');
  const { result, steps, execute } = useDeepSeek();

  const handleRun = () => {
    execute(input, agent);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">DeepSeek Reasoning Engine</h1>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        rows={4}
        placeholder="Enter your query here..."
      />
      <AgentSelector selected={agent} onChange={setAgent} />
      <button
        onClick={handleRun}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Run DeepSeek
      </button>
      {result && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Result</h2>
          <div className="p-2 bg-green-100 rounded mb-4">{result}</div>
          <StepVisualizer steps={steps} />
          <PromptDisplay prompt={buildPrompt(input)} />
        </div>
      )}
    </div>
  );
};
