import { useState, useEffect } from 'react';

export const useCreateFilteredLinesArray = (
  keyPress,
  firstLine,
  linesArray,
) => {
  const [filteredLinesArray, setFilteredLinesArray] = useState([0]);
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
