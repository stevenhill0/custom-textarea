export const useControlTextareaHeight = (
  pressedKeysAndMeasure,
  setTextareaHeight,
  textareaHeight,
) => {
  const { keyPress, liveHeight } = pressedKeysAndMeasure;

  /**
   * Logic
   */

  if (keyPress === 'Enter') {
    const rowHeight = 15;
    const textRows = Math.ceil(liveHeight / rowHeight);

    if (textRows > textareaHeight) {
      setTextareaHeight(textRows);
    }
  }
};
