import { useState, useEffect } from 'react';

export const useCountCharactersArray = (keyDownEventData) => {
  const [countCharactersArray, setCountCharactersArray] = useState([]);

  const { keyPress, typedOutCharactersZeroBased } = keyDownEventData;

  useEffect(() => {
    if (keyPress === 'Enter') {
      setCountCharactersArray((prevCharacters) => {
        return [...prevCharacters, typedOutCharactersZeroBased];
      });
    }
  }, [keyPress, typedOutCharactersZeroBased]);

  return countCharactersArray;
};
