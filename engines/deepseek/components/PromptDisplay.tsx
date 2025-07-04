import React from 'react';

export const PromptDisplay = ({ prompt }: { prompt: string }) => (
  <pre className="bg-black text-green-400 p-4 rounded text-sm overflow-auto">
    {prompt}
  </pre>
);
