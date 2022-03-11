import { useDecreaseTextareaHeight } from './useDecreaseTextareaHeight';
import { useControlTextareaHeight } from './useControlTextareaHeight';
import { useAutoWidth } from './useAutoWidth';

export const useControlDimensions = (
  pressedKeysAndMeasure,
  setTextareaHeight,
  textareaHeight,
  setTextareaWidth,
  textareaWidth,
  countCharactersArray,
) => {
  /**
   * Custom Hooks
   */

  useAutoWidth(
    pressedKeysAndMeasure,
    setTextareaWidth,
    textareaWidth,
    countCharactersArray,
  );

  useControlTextareaHeight(
    pressedKeysAndMeasure,
    setTextareaHeight,
    textareaHeight,
  );
  useDecreaseTextareaHeight(
    pressedKeysAndMeasure,
    setTextareaHeight,
    textareaHeight,
    countCharactersArray,
  );
};
