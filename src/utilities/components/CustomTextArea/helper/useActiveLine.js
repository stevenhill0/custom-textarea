import { combineLinesCharacters } from './combineLinesCharacters';
import { useState, useEffect } from 'react';

export const useActiveLine = (
  keyPress,
  pressedKey,
  filteredLinesArray,
  filteredCharacters,
) => {
  const combinedLinesCharacters = combineLinesCharacters(
    filteredLinesArray,
    filteredCharacters,
  );

  let activeLine = filteredCharacters - combinedLinesCharacters;

  return activeLine;
};
