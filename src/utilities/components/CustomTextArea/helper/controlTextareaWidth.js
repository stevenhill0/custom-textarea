export const controlWidth = (width, textareaWidth, setTextareaWidth) => {
  const rowWidth = 7.5;
  const textRows = Math.ceil(width / rowWidth) - 1;

  if (textRows > textareaWidth) {
    setTextareaWidth(textRows);
  }
};
