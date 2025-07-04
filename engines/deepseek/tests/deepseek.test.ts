test('DeepSeek basic run', async () => {
  const { result } = await import('../core/deepseek').then(m => m.runDeepSeek('test input'));
  expect(result).toContain('Processed');
});
