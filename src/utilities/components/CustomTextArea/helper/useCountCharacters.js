import { useState, useEffect } from 'react';

export const useCountCharacters = (keyDownEventData) => {
  const [countCharactersArray, setCountCharactersArray] = useState([]);

  const { keyPress, typedOutCharactersZeroBased } = keyDownEventData;

  /**
   * Effects
   */

  useEffect(() => {
    if (keyPress === 'Enter') {
      setCountCharactersArray((prevCharacters) => {
        return [...prevCharacters, typedOutCharactersZeroBased];
      });
    }
  }, [keyPress, typedOutCharactersZeroBased]);

  /**
   * Logic
   */

  const lastNumber = countCharactersArray[countCharactersArray.length - 1];
  const secondLast = countCharactersArray[countCharactersArray.length - 2];
  const firstLine = countCharactersArray[0];
  const lastLine = lastNumber - secondLast - 1;

  const lines = { firstLine, lastLine };

  return lines;
};
