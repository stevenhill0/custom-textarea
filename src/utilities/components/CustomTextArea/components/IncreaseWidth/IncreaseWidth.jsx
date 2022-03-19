// import { useCountCharacters } from '../../helper/useCountCharacters';
// import { useControlTextareaWidth } from '../../helper/useControlTextareaWidth';
// import { useDecreaseTextareaWidth } from '../../helper/useDecreaseTextareaWidth';
// import { useActiveLine } from '../../helper/useActiveLine';
// import { useFindLongestLine } from '../../helper/useFindLongestLine';
// import { useCheckKeys } from '../../helper/useCheckKeys';
// import { useCountCharactersArray } from '../../helper/useCountCharactersArray';
import { useWidthState } from '../../helper/useWidthState';

export const IncreaseWidth = ({ keyDownEventData }) => {
  /**
   * Custom Hooks
   */

  useWidthState(keyDownEventData);

  // useDecreaseTextareaWidth(
  // //   pressedKeysAndMeasure,
  // //   countCharactersArray,
  // //   textareaWidth,
  // //   setTextareaWidth,
  // // );

  return null;
};
