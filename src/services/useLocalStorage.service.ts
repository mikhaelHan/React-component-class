import { useState } from 'react';
import LSKey from '../models/Local-storage.model';

const useLocalStorage = () => {
  const [storeValue, setStoreValue] = useState<string>(() => {
    const item: string | null = localStorage.getItem(LSKey.key);
    if (item !== null) {
      return item;
    }
    localStorage.setItem(LSKey.key, '');
    return '';
  });

  const changeValue = (value: string) => {
    localStorage.setItem(LSKey.key, value);
    setStoreValue(value);
  };

  return [storeValue, changeValue] as const;
};

export default useLocalStorage;
