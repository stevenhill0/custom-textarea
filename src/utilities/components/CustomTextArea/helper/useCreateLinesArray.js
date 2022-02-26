import { useEffect } from 'react';

export const useCreateLinesArray = (
  keyPress,
  linesCount,
  firstLine,
  setLinesArray,
) => {
  useEffect(() => {
    if (keyPress === 'Enter') {
      const newArray = linesCount.filter((lines) => {
        return lines > 0;
      });

      newArray.unshift(firstLine);
      setLinesArray(newArray);
    }
  }, [keyPress, linesCount, firstLine, setLinesArray]);
};
