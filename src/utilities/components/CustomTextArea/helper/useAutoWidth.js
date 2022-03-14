import { useCountCharacters } from './useCountCharacters';
import { controlTextareaWidth } from './controlTextareaWidth';
import { useDecreaseTextareaWidth } from './useDecreaseTextareaWidth';
import { useActiveLine } from './useActiveLine';
import { useFindLargestLine } from './useFindLargestLine';
import { useCountBackspaceKeys } from './useCountBackspaceKeys';

export const useAutoWidth = (
  pressedKeysAndMeasure,
  setTextareaWidth,
  textareaWidth,
  countCharactersArray,
) => {
  const { liveWidth, keyPress, typedOutCharacters } = pressedKeysAndMeasure;

  /**
   *  Prep Logic
   */

  const keyCheck = [
    'Enter',
    'Backspace',
    'ArrowUp',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'Escape',
    'Control',
    'Shift',
    '(space)',
    'F12',
  ];
  const keyArray = keyCheck.filter((key) => {
    return key === keyPress;
  });
  const pressedKey = keyArray.toString();

  /**
   * Custom Hooks
   */

  const { firstLine } = useCountCharacters(countCharactersArray);

  const activeLine = useActiveLine(
    keyPress,
    pressedKey,
    typedOutCharacters,
    countCharactersArray,
  );

  const largestLine = useFindLargestLine(keyPress, countCharactersArray);

  const countedBackspaces = useCountBackspaceKeys(
    pressedKey,
    typedOutCharacters,
  );

  /**
   * Logic
   */
  console.log('useCountBackspaceKeys' + countedBackspaces);

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
    activeLine,
    largestLine,
    firstLine,
    typedOutCharacters,
    countCharactersArray,
  );
};
