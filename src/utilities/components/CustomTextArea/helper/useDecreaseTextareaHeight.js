import { useEffect } from 'react';
import { countCharacters } from './countCharacters';

export const useDecreaseTextareaHeight = (
  keyPress,
  setTextareaHeight,
  textareaHeight,
  measureWidthAndHeight,
  charactersArray,
) => {
  const { rows } = measureWidthAndHeight;
  //   const { height } = measureWidthAndHeight;
  //   const rowHeight = 15;
  //   const textRows = Math.ceil(height / rowHeight) - 1;
  // const { lastLine } = countCharacters(charactersArray);
  useEffect(() => {
    if (keyPress.key === 'Backspace') {
      setTextareaHeight((prev) => {
        return (prev = 2);
      });
    }
  }, [keyPress, setTextareaHeight]);
};
