import { fishBash } from './fishBash';

const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();

describe('fishBash', () => {
  beforeEach(() => {
    consoleLogSpy.mockClear();
  });

  it('should print "fish" for multiples of 3', () => {
    fishBash(3);
    expect(consoleLogSpy).toHaveBeenCalledWith('fish');
  });

  it('should print "bash" for multiples of 5', () => {
    fishBash(5);
    expect(consoleLogSpy).toHaveBeenCalledWith('bash');
  });

  it('should print "fish bash" for multiples of 15', () => {
    fishBash(15);
    expect(consoleLogSpy).toHaveBeenCalledWith('fish bash');
  });

  it('should print numbers that are not multiples of 3 or 5', () => {
    fishBash(2);
    expect(consoleLogSpy).toHaveBeenCalledWith('1');
    expect(consoleLogSpy).toHaveBeenCalledWith('2');
  });
});

afterAll(() => {
  consoleLogSpy.mockRestore();
});
