import { useCreateLinesObject } from './useCreateLinesObject';
import { useCountCharacters } from './useCountCharacters';
import { EventDataContext } from './EventDataContext';

import { useState, useEffect, useContext } from 'react';

export const useCreateFilteredLinesArray = () => {
  /**
   * React Hooks
   */

  const keyDownEventData = useContext(EventDataContext);
  const { keyPress } = keyDownEventData;

  const [filteredLinesArray, setFilteredLinesArray] = useState([0]);

  /**
   * Custom Hooks
   */

  const { firstLine } = useCountCharacters();
  const linesObject = useCreateLinesObject();
  const { linesArray } = linesObject;

  /**
   * React Hooks
   */

  useEffect(() => {
    if (keyPress === 'Enter') {
      const newArray = linesArray.filter((lines) => {
        return lines > 0;
      });

      newArray.unshift(firstLine);
      setFilteredLinesArray(newArray);
    }
  }, [keyPress, linesArray, firstLine]);

  /**
   * Returned Value
   */

  return filteredLinesArray;
};
