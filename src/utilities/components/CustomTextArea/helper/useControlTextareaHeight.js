import { useEffect } from 'react';

const useControlTextareaHeight = (
  widthAndHeight,
  textareaHeight,
  setTextareaHeight,
  keyPress,
) => {
  const { height } = widthAndHeight;
  const rowHeight = 15;
  const textRows = Math.ceil(height / rowHeight) - 1;

  if (textRows > textareaHeight) {
    setTextareaHeight(textRows);
  }
};

export default useControlTextareaHeight;
