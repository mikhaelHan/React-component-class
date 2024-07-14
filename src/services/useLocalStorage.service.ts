import { useState } from 'react';
import { ILSValue, LSKey } from '../models/Local-storage.model';

const useLocalStorage = () => {
  const [storeValue, setStoreValue] = useState<ILSValue>(() => {
    const item: string | null = localStorage.getItem(LSKey.key);

    if (item !== null) {
      const parsedItem = JSON.parse(item);
      if ('search' in parsedItem && 'page' in parsedItem) {
        return parsedItem as ILSValue;
      }
    }

    const newItem: ILSValue = { search: '', page: 1 };
    localStorage.setItem(LSKey.key, JSON.stringify(newItem));
    return newItem;
  });

  const changeValue = (value: ILSValue) => {
    localStorage.setItem(LSKey.key, JSON.stringify(value));
    setStoreValue(value);
  };

  return [storeValue, changeValue] as const;
};

export default useLocalStorage;
