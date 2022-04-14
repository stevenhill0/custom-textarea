import { useState, useEffect, useRef } from 'react';

export const useHeightState = (keyDownEventData) => {
  const { keyPress } = keyDownEventData;

  /**
   * React Hooks
   */

  const [reRender, setReRender] = useState();
  const textareaRef = useRef(null);

  /**
   * Logic
   */

  //* Increase/Decrease Height

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = '0px';

      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + 'px';
    }
  }, [reRender]);

  const textAreaChange = (event) => {
    const countCharacters = event.target.value.length;
    const firstLine = 68;
    let finalCountLines = 0;

    const countLines = countCharacters / firstLine;
    finalCountLines = Math.floor(countLines);

    const result1 = firstLine * finalCountLines + 1;

    if (
      countCharacters === result1 ||
      keyPress === 'Enter' ||
      keyPress === 'Backspace' ||
      /\s/.test(event.target.value)
    ) {
      setReRender(event.target.value);
    }

    if (keyPress === 'Backspace') {
      setReRender(event.target.value);
    }
  };

  /**
   * Returned Value
   */

  const height = { textareaRef, textAreaChange };

  return height;
};
