import { useCountEnterKeys } from './useCountEnterKeys';
import { EventDataContext } from './EventDataContext';

import { useContext } from 'react';

export const useFilteredCharacters = () => {
  /**
   * React Hooks
   */

  const keyDownEventData = useContext(EventDataContext);
  const { typedOutCharacters } = keyDownEventData;

  /**
   * Custom Hooks
   */

  const countedEnterKeys = useCountEnterKeys();

  const result = typedOutCharacters - countedEnterKeys;

  /**
   * Returned Value
   */

  return result;
};
