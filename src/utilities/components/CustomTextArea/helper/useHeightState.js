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
    if (textareaRef?.current) {
      textareaRef.current.style.height = '5px';
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + 'px';
    }
  }, [reRender]);

  const textAreaChange = (event) => {
    // const countCharacters = event.target.value.length;
    // console.log('XXX countCharacters', countCharacters);

    // let lines = event.target.value.split('\n');

    // console.log('XXX lines', lines);

    // const firstLine = 68;
    // let finalCountLines = 0;

    // const countLines = countCharacters / firstLine;
    // finalCountLines = Math.floor(countLines);

    // console.log('XXX finalCountLines', finalCountLines);

    // const result1 = firstLine * finalCountLines + 1;

    // if (
    //   countCharacters === result1 ||
    //   keyPress === 'Enter' ||
    //   keyPress === 'Backspace' ||
    //   /\s/.test(event.target.value)
    // ) {
    //   setReRender(event.target.value);
    // }
    setReRender(event.target.value);
  };

  return { textareaRef, textAreaChange };
};
