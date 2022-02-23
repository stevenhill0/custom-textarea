import { useDecreaseTextareaHeight } from './useDecreaseTextareaHeight';
import useControlTextareaHeight from './useControlTextareaHeight';

const useControlDimensions = (
  keyPress,
  setTextareaHeight,
  textareaHeight,
  measureWidthAndHeight,
) => {
  useControlTextareaHeight(
    measureWidthAndHeight,
    textareaHeight,
    setTextareaHeight,
  );
  useDecreaseTextareaHeight(
    keyPress,
    setTextareaHeight,
    textareaHeight,
    measureWidthAndHeight,
  );
};

export default useControlDimensions;
