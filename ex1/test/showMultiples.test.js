import showMultiples from '../src/showMultiples.js';

test('showMultiples', () => {
  expect(showMultiples(3)).toBe('Visual');
  expect(showMultiples(5)).toBe('Nuts');
  expect(showMultiples(15)).toBe('Visual Nuts');
  expect(showMultiples(1)).toBe(1);
});
