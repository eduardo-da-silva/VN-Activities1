import showMultiples from '../src/showMultiples.js';

jest.mock('../src/showMultiples.js');

test('ensure that showMultiples are called 500 times', (done) => {
  require('../index');
  expect(showMultiples.mock.calls.length).toBe(500);
  done();
});
