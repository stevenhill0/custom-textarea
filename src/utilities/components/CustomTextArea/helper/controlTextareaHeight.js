export const controlHeight = (
  widthAndHeight,
  textareaHeight,
  setTextareaHeight
) => {
  const { height } = widthAndHeight;
  const rowHeight = 15;
  const textRows = Math.ceil(height / rowHeight) - 1;

  if (textRows > textareaHeight) {
    setTextareaHeight(textRows);
  }
};
