import { useState, useEffect } from 'react';

export const useCountEnterKeys = (pressedKey, typedOutCharacters) => {
  /**
   * React Hooks
   */

  const [countEnterKeys, setCountEnterKeys] = useState(0);

  useEffect(() => {
    if (pressedKey === 'Enter') {
      setCountEnterKeys((previousNumber) => {
        return previousNumber + 1;
      });
    }
  }, [pressedKey, typedOutCharacters]);

  /**
   * Returned Value
   */

  return countEnterKeys;
};
