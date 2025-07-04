test('Prompt Builder builds correctly', () => {
  const { buildPrompt } = require('../core/promptBuilder');
  expect(buildPrompt('test')).toContain('Input: test');
});
