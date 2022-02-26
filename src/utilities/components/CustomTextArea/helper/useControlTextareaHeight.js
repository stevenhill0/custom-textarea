export const useControlTextareaHeight = (
  pressedKeysAndMeasurement,
  setTextareaHeight,
  textareaHeight,
) => {
  const { keyPress, liveHeight } = pressedKeysAndMeasurement;

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
