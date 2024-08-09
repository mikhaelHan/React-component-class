import { useState } from 'react';

const useLocalStorage = () => {
  const [storeValue, setStoreValue] = useState<string | number>(1);

  const changeValue = (value: string | number) => {
    if (value === '') {
      setStoreValue(1);
    } else {
      setStoreValue(value);
    }
  };

  return [storeValue, changeValue] as const;
};

export default useLocalStorage;
