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

  console.log(activeLine);

  return activeLine;
  //   if (keyPress === 'Enter' && activeLine > 0) {
  //     activeLine = 0;

  //     return activeLine;
  //   }

  //   return activeLine;
};
