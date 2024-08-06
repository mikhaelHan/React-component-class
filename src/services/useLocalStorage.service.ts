import { useState } from 'react';
import KEY from '../models/Local-storage.model';

const useLocalStorage = () => {
  const [storeValue, setStoreValue] = useState<string | number>(() => {
    const item: string | null =
      typeof window !== 'undefined' && localStorage
        ? localStorage.getItem(KEY)
        : null;

    if (item !== null && item !== '') {
      const parsedItem: string | number = JSON.parse(item);
      return parsedItem;
    }
    if (typeof window !== 'undefined' && localStorage) {
      localStorage.setItem(KEY, JSON.stringify(1));
    }

    return 1;
  });

  const changeValue = (value: string | number) => {
    if (value === '') {
      setStoreValue(1);
      if (typeof window !== 'undefined' && localStorage)
        localStorage.setItem(KEY, JSON.stringify(1));
    } else {
      setStoreValue(value);
      if (typeof window !== 'undefined' && localStorage)
        localStorage.setItem(KEY, JSON.stringify(value));
    }
  };

  return [storeValue, changeValue] as const;
};

export default useLocalStorage;
