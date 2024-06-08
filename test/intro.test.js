import { describe, it, expect } from "vitest";
import { fizzBuzz, max } from '../src/intro';
 
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