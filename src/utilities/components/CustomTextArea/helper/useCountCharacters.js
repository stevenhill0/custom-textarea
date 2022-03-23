import { EventDataContext } from './EventDataContext';

import { useState, useEffect, useContext } from 'react';

export const useCountCharacters = () => {
  /**
   * React Hooks
   */

  const keyDownEventData = useContext(EventDataContext);
  const { keyPress, typedOutCharactersZeroBased } = keyDownEventData;

  const [countCharactersArray, setCountCharactersArray] = useState([]);

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

  /**
   * Returned Value
   */

  return lines;
};
