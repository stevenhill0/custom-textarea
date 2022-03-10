import { useDecreaseTextareaHeight } from './useDecreaseTextareaHeight';
import { useControlTextareaHeight } from './useControlTextareaHeight';
import { useAutoWidth } from './useAutoWidth';

export const useControlDimensions = (
  pressedKeysAndMeasure,
  setTextareaHeight,
  textareaHeight,
  setTextareaWidth,
  textareaWidth,
  charactersArray,
) => {
  /**
   * Custom Hooks
   */

  useAutoWidth(
    pressedKeysAndMeasure,
    setTextareaWidth,
    textareaWidth,
    charactersArray,
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
    charactersArray,
  );
};
