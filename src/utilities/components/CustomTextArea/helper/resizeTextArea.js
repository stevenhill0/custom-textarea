import { controlHeight } from './controlTextareaHeight';
import { controlWidth } from './controlTextareaWidth';

export const resizeTextArea = (
  event,
  textareaHeight,
  setTextareaHeight,
  textareaWidth,
  setTextareaWidth
) => {
  const height = event.target.scrollHeight;
  const width = event.target.scrollWidth;

  controlHeight(height, textareaHeight, setTextareaHeight);
  controlWidth(width, textareaWidth, setTextareaWidth);
};
// const {
//   key,
//   target: {
//     value: { length },
//   },
// } = event;
// { key: key, length: length }
