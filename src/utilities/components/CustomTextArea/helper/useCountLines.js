import { useState, useEffect } from 'react';
import { characterCount } from './characterCount';

export const useCountLines = (keyPress, characterArray, setLineCount) => {
  const { lastLine } = characterCount(characterArray);

  useEffect(() => {
    if (keyPress.key === 'Enter') {
      setLineCount((previous) => {
        return [...previous, lastLine];
      });
      setLineCount((previous) => {
        return [...previous, 1];
      });
    }
  }, [keyPress.key, setLineCount, lastLine, characterArray]);

  // useEffect(() => {
  //   if (keyPress.key === 'Enter') {
  //     const lineArray = lineCount.filter((lines) => {
  //       return lines > 0;
  //     });

  //     lineArray.unshift(firstLine);

  //     // console.log(`characterArray: ${characterArray}`);
  //     console.log('First Line : ' + firstLine);
  //     console.log('Last Line : ' + lastLine);
  //     // console.log('Line Count: ' + lineCount);
  //     console.log('Line Array: ' + lineArray);
  //   }
  // }, [keyPress.key, lineCount, firstLine, lastLine]);
};
