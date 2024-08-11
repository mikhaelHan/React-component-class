import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react';
import useLocalStorage from '../services/useLocalStorage.service';

describe('useLocalStorage', () => {
  it('should set and get values from localStorage', () => {
    const { result } = renderHook(() => useLocalStorage());

    expect(result.current[0]).toBe(1);

    act(() => {
      result.current[1](8);
    });

    expect(result.current[0]).toBe(8);
  });
});
