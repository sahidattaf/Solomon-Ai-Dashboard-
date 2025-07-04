import React from 'react';

const agents = ['default', 'selfReflector', 'explainer', 'analyzer'];

export const AgentSelector = ({ selected, onChange }: { selected: string, onChange: (agent: string) => void }) => (
  <div className="p-4">
    <label className="block mb-2 font-medium">Select Agent:</label>
    <select
      value={selected}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-2 border border-gray-300 rounded"
    >
      {agents.map(agent => (
        <option key={agent} value={agent}>{agent}</option>
      ))}
    </select>
  </div>
);
