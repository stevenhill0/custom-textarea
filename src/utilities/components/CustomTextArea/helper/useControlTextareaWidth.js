export const useControlTextareaWidth = (
  liveWidth,
  textareaWidth,
  setTextareaWidth,
  keyPress,
  pressedKey,
  firstLine,
  activeLine,
  largestLine,
) => {
  /**
   * Logic
   */

  const maxLength = 7.41;
  const textRows = Math.floor(liveWidth / maxLength - 1);

  if (
    (keyPress !== pressedKey && firstLine === 0) ||
    (keyPress !== pressedKey && activeLine > largestLine)
  ) {
    if (textRows > textareaWidth) {
      setTextareaWidth(textRows);
    }
  }
};
