export const controlTextareaWidth = (
  liveWidth,
  textareaWidth,
  setTextareaWidth,
  keyPress,
) => {
  /**
   * Logic
   */

  const maxLength = 7.41;
  const textRows = Math.floor(liveWidth / maxLength - 1);

  if (textRows > textareaWidth) {
    setTextareaWidth(textRows);
  }
};
