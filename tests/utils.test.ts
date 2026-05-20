import { describe, it, expect } from 'vitest';
import { formatCurrency, formatDate } from '../src/lib/utils';

describe('formatCurrency', () => {
  it('formats USD', () => {
    const result = formatCurrency(29);
    expect(result).toContain('29');
    expect(result).toContain('$');
  });

  it('formats zero', () => {
    expect(formatCurrency(0)).toContain('0');
  });
});

describe('formatDate', () => {
  it('formats a date string', () => {
    const result = formatDate('2026-05-20');
    expect(result).toBeTruthy();
    expect(typeof result).toBe('string');
  });

  it('formats a Date object', () => {
    const result = formatDate(new Date());
    expect(result).toBeTruthy();
  });
});
