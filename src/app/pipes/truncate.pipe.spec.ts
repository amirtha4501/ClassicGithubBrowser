import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  let pipe: TruncatePipe;

  beforeEach(() => {
    pipe = new TruncatePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should truncate text if it exceeds limit', () => {
    const text = 'This is a long text that should be truncated';
    const result = pipe.transform(text, 10);
    expect(result).toBe('This is a ...');
  });

  it('should not truncate text if it does not exceed limit', () => {
    const text = 'Short text';
    const result = pipe.transform(text, 20);
    expect(result).toBe('Short text');
  });

  it('should use default limit of 100', () => {
    const longText = 'a'.repeat(101);
    const result = pipe.transform(longText);
    expect(result.length).toBe(103); // 100 + '...'
    expect(result.endsWith('...')).toBeTrue();
  });

  it('should return empty string if value is null or undefined', () => {
    expect(pipe.transform(null as any)).toBe('');
    expect(pipe.transform(undefined as any)).toBe('');
  });
});
