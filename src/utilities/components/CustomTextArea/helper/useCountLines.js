import { useEffect } from 'react';

export const useCountLines = (
  keyPress,
  characterArray,
  lineCount,
  setLineCount
) => {
  const lastNumber = characterArray[characterArray.length - 1];
  const secondLast = characterArray[characterArray.length - 2];
  const firstLine = characterArray[0];
  const lastLine = lastNumber - secondLast - 1;

  useEffect(() => {
    if (keyPress.key === 'Enter') {
      setLineCount((previous) => {
        return [...previous, lastLine];
      });
    }
  }, [keyPress.key, setLineCount, lastLine]);

  const lineArray = lineCount.filter((line) => {
    return line > 0;
  });
  lineArray.unshift(firstLine);

  console.log(`characterArray: ${characterArray}`);
  console.log('First Line : ' + firstLine);
  console.log('Last Line : ' + lastLine);
  console.log('Line Count: ' + lineCount);
  console.log('Line Array: ' + lineArray);
};
