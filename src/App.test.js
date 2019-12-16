import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import fizzbuzz from './fizzbuzz';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

const result = fizzbuzz();

test('should log "Fizz" for multiples of 3', function() {
      expect(result[2]).toBe("Fizz");
});
test('should log "Buzz" for multiples of 5', function() {
      expect(result[4]).toBe("Buzz");
});
test('should log "FizzBuzz" for multiples of 15', function() {
      expect(result[14]).toBe("FizzBuzz");
});
test('should log a number for non multiples of 3 or 5', function() {
      expect(typeof result[3]).toBe("number");
});
test('should return an array', () => {
      expect(Array.isArray(result)).toBeTruthy();
})
test('should return correct number of responsees', () => {
      expect(result.length).toBe(100);
})

