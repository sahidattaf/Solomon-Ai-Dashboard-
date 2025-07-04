import React from 'react';

export const StepVisualizer = ({ steps }: { steps: any[] }) => (
  <div className="p-4">
    {steps.map((step, idx) => (
      <div key={step.id} className="mb-2 p-2 rounded bg-gray-100">
        <div className="font-semibold">Step {idx + 1}</div>
        <div>{step.thought}</div>
      </div>
    ))}
  </div>
);
