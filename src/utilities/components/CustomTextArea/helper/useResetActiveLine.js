import { useCountBackspaceKeys } from './useCountBackspaceKeys';
import { activeLine } from './useActiveLine';

export const useResetActiveLine = (pressedKey, typedOutCharacters) => {
  const countedBackspaceKeys = useCountBackspaceKeys(
    pressedKey,
    typedOutCharacters,
  );

  const result = activeLine + countedBackspaceKeys;

  return result;
};
