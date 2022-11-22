import {
  multipleOfThree,
  multipleOfFive,
  multipleOfThreeAndFive,
} from './multiples.js';

const showMultiples = (number) => {
  if (multipleOfThreeAndFive(number)) {
    return 'Visual Nuts';
  }
  if (multipleOfThree(number)) {
    return 'Visual';
  }
  if (multipleOfFive(number)) {
    return 'Nuts';
  }
  return number;
};

export { showMultiples };
