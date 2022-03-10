import { useEffect } from 'react';

export const useFilteredLinesArray = (
  keyPress,
  firstLine,
  linesArray,
  setFilteredLinesArray,
) => {
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
};
