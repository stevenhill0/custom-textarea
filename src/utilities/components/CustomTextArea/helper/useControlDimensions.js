import { useDecreaseTextareaHeight } from './useDecreaseTextareaHeight';
import { useControlTextareaHeight } from './useControlTextareaHeight';
import { useAutoWidth } from './useAutoWidth';

export const useControlDimensions = (
  pressedKeysAndMeasurement,
  setTextareaHeight,
  textareaHeight,
  setTextareaWidth,
  textareaWidth,
  charactersArray,
) => {
  useAutoWidth(
    pressedKeysAndMeasurement,
    setTextareaWidth,
    textareaWidth,
    charactersArray,
  );

  useControlTextareaHeight(
    pressedKeysAndMeasurement,
    setTextareaHeight,
    textareaHeight,
  );
  useDecreaseTextareaHeight(
    pressedKeysAndMeasurement,
    setTextareaHeight,
    textareaHeight,
  );
};
