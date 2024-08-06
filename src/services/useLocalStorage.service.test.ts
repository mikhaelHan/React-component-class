import { expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import useLocalStorage from './useLocalStorage.service';

describe('useLocalStorage', () => {
  it('should set and get values from localStorage', () => {
    const { result } = renderHook(() => useLocalStorage());

    expect(result.current[0]).toBe(1);

    result.current[1](8);

    expect(result.current[0]).toBe(1);
  });
});
