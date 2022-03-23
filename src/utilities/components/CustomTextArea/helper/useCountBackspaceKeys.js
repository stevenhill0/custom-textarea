import { useState, useEffect } from 'react';
import { useActiveLine as activeLine } from './useActiveLine';
import { useCheckKeys } from './useCheckKeys';

export const useCountBackspaceKeys = (typedOutCharacters) => {
  const [countBackspaceKeys, setCountBackspaceKeys] = useState(0);

  /**
   * Custom Hooks
   */

  const pressedKey = useCheckKeys();
  // const activeLine = useActiveLine(filteredLinesArray, filteredCharacters);

  useEffect(() => {
    if (pressedKey === 'Backspace') {
      setCountBackspaceKeys((previousNumber) => {
        return previousNumber + 1;
      });
    }
  }, [pressedKey, typedOutCharacters]);

  return countBackspaceKeys;
};
