import { useState, useEffect } from 'react';

export const useCountCharactersArray = (pressedKeysAndMeasure) => {
  const [countCharactersArray, setCountCharactersArray] = useState([]);

  const { keyPress, typedOutCharactersZeroBased } = pressedKeysAndMeasure;

  useEffect(() => {
    if (keyPress === 'Enter') {
      setCountCharactersArray((prevCharacters) => {
        return [...prevCharacters, typedOutCharactersZeroBased];
      });
    }
  }, [keyPress, typedOutCharactersZeroBased]);

  return countCharactersArray;
};
