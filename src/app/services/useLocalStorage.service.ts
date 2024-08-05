import { useState } from 'react';
import KEY from '../models/Local-storage.model';

const useLocalStorage = () => {
  const [storeValue, setStoreValue] = useState<string | number>(() => {
    const item: string | null = localStorage.getItem(KEY);

    if (item !== null && item !== '') {
      const parsedItem: string | number = JSON.parse(item);
      return parsedItem;
    }

    localStorage.setItem(KEY, JSON.stringify(1));
    return 1;
  });

  const changeValue = (value: string | number) => {
    if (value === '') {
      localStorage.setItem(KEY, JSON.stringify(1));
      setStoreValue(1);
    } else {
      localStorage.setItem(KEY, JSON.stringify(value));
      setStoreValue(value);
    }
  };

  return [storeValue, changeValue] as const;
};

export default useLocalStorage;
