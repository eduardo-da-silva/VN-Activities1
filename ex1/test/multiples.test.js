import {
  multipleOfThree,
  multipleOfFive,
  multipleOfThreeAndFive,
} from '../src/multiples.js';

test('multipleOfThree', () => {
  expect(multipleOfThree(3)).toBe(true);
  expect(multipleOfThree(4)).toBe(false);
});

test('multipleOfFive', () => {
  expect(multipleOfFive(5)).toBe(true);
  expect(multipleOfFive(6)).toBe(false);
});

test('multipleOfThreeAndFive', () => {
  expect(multipleOfThreeAndFive(15)).toBe(true);
  expect(multipleOfThreeAndFive(16)).toBe(false);
});
