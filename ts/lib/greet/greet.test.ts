import { greet } from './greet';

test('return the expected greeting', () => {
  expect(greet('Hello')).toBe('Hello, world!');
});
