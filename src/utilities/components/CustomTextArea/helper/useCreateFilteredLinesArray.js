import { useCreateLinesObject } from './useCreateLinesObject';
import { useState, useEffect } from 'react';

export const useCreateFilteredLinesArray = (keyPress, firstLine, lastLine) => {
  const [filteredLinesArray, setFilteredLinesArray] = useState([0]);

  /**
   * Custom Hooks
   */

  const linesObject = useCreateLinesObject(keyPress, lastLine);
  const { linesArray } = linesObject;

  /**
   * Effects
   */

  useEffect(() => {
    if (keyPress === 'Enter') {
      const newArray = linesArray.filter((lines) => {
        return lines > 0;
      });

      newArray.unshift(firstLine);
      setFilteredLinesArray(newArray);
    }
  }, [keyPress, linesArray, firstLine, setFilteredLinesArray]);

  return filteredLinesArray;
};
