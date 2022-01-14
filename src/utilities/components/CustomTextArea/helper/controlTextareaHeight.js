export const controlHeight = (height, textareaHeight, setTextareaHeight) => {
  const rowHeight = 15;
  const textRows = Math.ceil(height / rowHeight) - 1;

  if (textRows > textareaHeight) {
    setTextareaHeight(textRows);
  }
};
