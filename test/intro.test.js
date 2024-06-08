import { describe, it, expect } from "vitest";
import { fizzBuzz, max, factorial } from '../src/intro';
 
describe('max', () => {
    // 
    it('should return first argument if it is greater', () => expect(max(2, 1)).toBe(2))
    
    // 
    it('should return second argument if it is greater', () => expect(max(1, 2)).toBe(2))
    
    // 
    it('should return first argument if arguments are equal', () => expect(max(2)).toBe(2))
});

describe('fizzBuzz', () => {
    // 
    it('should return FizzBuzz if argument is divisible by 3 and 5', () => expect(fizzBuzz(15)).toBe('FizzBuzz'))

    // 
    it('should return Fizz if argument is divisible by 3 ', () => expect(fizzBuzz(3)).toBe('Fizz'))
    
    // 
    it('should return Buzz if argument 5', () => expect(fizzBuzz(5)).toBe('Buzz'))

})

describe('factorial', () => {
    // 
    it('should return undefined if n is less than 0', () => expect(factorial(-1)).toBe(undefined));

    // 
    it('should return 1 if n is equal 1 or 0', () => expect(factorial(0) || factorial(1)).toBe(1));

    // 
    it('should return 6 if n is 3',()=> expect(factorial(3)).toBe(6))
})
