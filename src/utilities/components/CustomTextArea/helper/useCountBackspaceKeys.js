import { useState, useEffect } from 'react';
import { useActiveLine } from './useActiveLine';

export const useCountBackspaceKeys = (pressedKey, typedOutCharacters) => {
  const [countBackspaceKeys, setCountBackspaceKeys] = useState(0);

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
