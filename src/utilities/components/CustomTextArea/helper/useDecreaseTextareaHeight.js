import { useCountCharacters } from './useCountCharacters';

import { useEffect } from 'react';

export const useDecreaseTextareaHeight = (
  pressedKeysAndMeasure,
  setTextareaHeight,
  textareaHeight,
) => {
  const { keyPress, liveRows, liveHeight, rowValue } = pressedKeysAndMeasure;

  // const rowHeight = 15;
  // const textRows = Math.ceil(liveHeight / rowHeight) - 1;
  const { lastLine, firstLine } = useCountCharacters();

  /**
   * Effects
   */
  // console.log(lastLine);
  // useEffect(() => {
  //   if (keyPress === 'Backspace') {
  //     setTextareaHeight((prev) => {
  //       return prev - 1;
  //     });
  //   }
  // }, [keyPress, setTextareaHeight, rowValue, pressedKeysAndMeasurement]);
};

// function CustomTextarea({minRows}) {
//   const [rows, setRows] = React.useState(minRows);
//   const [value, setValue] = React.useState("");

//   React.useEffect(() => {
//     const rowlen = value.split("\n");

//     if (rowlen.length > minRows) {
//       setRows(rowlen.length);
//     }
//   }, [value]);

//   return (
//     <textarea rows={rows} onChange={(text) => setValue(text.target.value)} />
//   );
// }
