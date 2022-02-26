import { useEffect } from 'react';
import { countCharacters } from './countCharacters';

export const useDecreaseTextareaHeight = (
  pressedKeysAndMeasurement,
  setTextareaHeight,
  textareaHeight,
) => {
  const { keyPress, liveRows } = pressedKeysAndMeasurement;

  //   const { height } = measureWidthAndHeight;
  //   const rowHeight = 15;
  //   const textRows = Math.ceil(height / rowHeight) - 1;
  // const { lastLine } = countCharacters(charactersArray);

  /**
   * Effects
   */

  useEffect(() => {
    if (keyPress === 'Backspace') {
      setTextareaHeight((prev) => {
        return (prev = 2);
      });
    }
  }, [keyPress, setTextareaHeight]);
};
