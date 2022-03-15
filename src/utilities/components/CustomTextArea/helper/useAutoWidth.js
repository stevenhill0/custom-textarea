import { useCountCharacters } from './useCountCharacters';
import { controlTextareaWidth } from './controlTextareaWidth';
import { useDecreaseTextareaWidth } from './useDecreaseTextareaWidth';
import { useActiveLine } from './useActiveLine';
import { useFindLargestLine } from './useFindLargestLine';
import { useCountBackspaceKeys } from './useCountBackspaceKeys';
import { useCheckKeys } from './useCheckKeys';
import { useCountCharactersArray } from './useCountCharactersArray';

export const useAutoWidth = (
  pressedKeysAndMeasure,
  setTextareaWidth,
  textareaWidth,
) => {
  const { liveWidth, keyPress, typedOutCharacters } = pressedKeysAndMeasure;

  /**
   * Custom Hooks
   */
  const countCharactersArray = useCountCharactersArray(pressedKeysAndMeasure);

  const pressedKey = useCheckKeys(keyPress);
  const { firstLine } = useCountCharacters(countCharactersArray);

  const activeLine = useActiveLine(
    keyPress,
    pressedKey,
    typedOutCharacters,
    countCharactersArray,
  );

  const largestLine = useFindLargestLine(keyPress, countCharactersArray);
  const countedBackspaces = useCountBackspaceKeys(keyPress, typedOutCharacters);

  /**
   * Logic
   */

  console.log('useCountBackspaceKeys: ' + countedBackspaces);

  // console.log('linesCount: ' + linesCount);
  // console.log(' typedOutCharacters: ' +  typedOutCharacters);
  // console.log('combinedCharacters: ' + combinedCharacters);

  // console.log('largestLine: ' + largestLine);
  // console.log('activeLine: ' + activeLine);
  // console.log('firstLine: ' + firstLine);

  // console.log(keyPress);
  // console.log(combinedCharacters);

  if (
    (keyPress !== pressedKey && firstLine === 0) ||
    (keyPress !== pressedKey && activeLine > largestLine)
  ) {
    controlTextareaWidth(liveWidth, textareaWidth, setTextareaWidth, keyPress);
  }

  useDecreaseTextareaWidth(
    liveWidth,
    textareaWidth,
    setTextareaWidth,
    keyPress,
    typedOutCharacters,
    countCharactersArray,
  );
};
