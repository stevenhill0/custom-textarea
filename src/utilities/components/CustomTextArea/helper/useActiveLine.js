import { combineLinesCharacters } from './combineLinesCharacters';
import { useCountCharacters } from './useCountCharacters';
import { useCreateFilteredLinesArray } from './useCreateFilteredLinesArray';
import { useFilteredCharacters } from './useFilteredCharacters';

import { useState, useEffect } from 'react';

export const useActiveLine = (
  keyPress,
  pressedKey,
  typedOutCharacters,
  countCharactersArray,
) => {
  const { firstLine, lastLine } = useCountCharacters(countCharactersArray);

  const filteredCharacters = useFilteredCharacters(
    pressedKey,
    typedOutCharacters,
  );

  const filteredLinesArray = useCreateFilteredLinesArray(
    keyPress,
    firstLine,
    lastLine,
  );

  const combinedLinesCharacters = combineLinesCharacters(
    filteredLinesArray,
    filteredCharacters,
  );

  let activeLine = filteredCharacters - combinedLinesCharacters;

  return activeLine;
};
