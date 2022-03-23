import { useCountEnterKeys } from './useCountEnterKeys';

export const useFilteredCharacters = (pressedKey, typedOutCharacters) => {
  /**
   * Custom Hooks
   */

  const countedEnterKeys = useCountEnterKeys(pressedKey, typedOutCharacters);

  const result = typedOutCharacters - countedEnterKeys;

  /**
   * Returned Value
   */

  return result;
};
