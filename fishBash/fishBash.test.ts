import { fishBash } from './fishBash';

const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();

// FishBash Function Tests
describe('fishBash', () => {
  // Reset console.log mock before each test
  beforeEach(() => {
    consoleLogSpy.mockClear();
  });

  // Case : If number is divisible by 3
  it('should print "fish" for multiples of 3', () => {
    fishBash(3);
    expect(consoleLogSpy).toHaveBeenCalledWith('fish');
  });

  // Case : If number is divisible by 5
  it('should print "bash" for multiples of 5', () => {
    fishBash(5);
    expect(consoleLogSpy).toHaveBeenCalledWith('bash');
  });

  // Case : If number is divisible by both 3 and 5
  it('should print "fish bash" for multiples of 15', () => {
    fishBash(15);
    expect(consoleLogSpy).toHaveBeenCalledWith('fish bash');
  });

  // Case : If number is not divisible by 3 nor 5
  it('should print numbers that are not multiples of 3 or 5', () => {
    fishBash(2);
    expect(consoleLogSpy).toHaveBeenCalledWith('1');
    expect(consoleLogSpy).toHaveBeenCalledWith('2');
  });
});

// Reset console.log mock after all tests
afterAll(() => {
  consoleLogSpy.mockRestore();
});
