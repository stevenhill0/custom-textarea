import { useCountEnterKeys } from './useCountEnterKeys';

export const useFilteredCharacters = (pressedKey, typedOutCharacters) => {
  const countedEnterKeys = useCountEnterKeys(pressedKey, typedOutCharacters);

  const result = typedOutCharacters - countedEnterKeys;

  return result;
};
