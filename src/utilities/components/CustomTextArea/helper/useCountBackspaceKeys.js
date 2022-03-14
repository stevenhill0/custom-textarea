import { useState, useEffect } from 'react';
import { useActiveLine as activeLine } from './useActiveLine';
import { useCheckKeys } from './useCheckKeys';

export const useCountBackspaceKeys = (keyPress, typedOutCharacters) => {
  const [countBackspaceKeys, setCountBackspaceKeys] = useState(0);

  const pressedKey = useCheckKeys(keyPress);
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
