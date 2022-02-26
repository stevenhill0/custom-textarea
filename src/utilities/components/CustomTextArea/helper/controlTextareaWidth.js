export const controlWidth = (liveWidth, textareaWidth, setTextareaWidth) => {
  /**
   * Logic
   */

  const rowWidth = 7.5;
  const textRows = Math.ceil(liveWidth / rowWidth) - 1;

  if (textRows > textareaWidth) {
    setTextareaWidth(textRows);
  }
};
