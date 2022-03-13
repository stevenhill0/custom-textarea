import { useState, useEffect } from 'react';

export const useCountEnterKeys = (pressedKey, typedOutCharacters) => {
  const [countEnterKeys, setCountEnterKeys] = useState(0);

  useEffect(() => {
    if (pressedKey === 'Enter') {
      setCountEnterKeys((previousNumber) => {
        return previousNumber + 1;
      });
    }
  }, [pressedKey, typedOutCharacters]);

  return countEnterKeys;
};
