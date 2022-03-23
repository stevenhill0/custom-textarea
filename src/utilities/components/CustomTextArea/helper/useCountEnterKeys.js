import { EventDataContext } from './EventDataContext';
import { useCheckKeys } from './useCheckKeys';

import { useState, useEffect, useContext } from 'react';

export const useCountEnterKeys = () => {
  /**
   * Custom Hooks
   */

  const pressedKey = useCheckKeys();

  /**
   * React Hooks
   */

  const keyDownEventData = useContext(EventDataContext);
  const { typedOutCharacters } = keyDownEventData;

  const [countEnterKeys, setCountEnterKeys] = useState(0);

  useEffect(() => {
    if (pressedKey === 'Enter') {
      setCountEnterKeys((previousNumber) => {
        return previousNumber + 1;
      });
    }
  }, [pressedKey, typedOutCharacters]);

  /**
   * Returned Value
   */

  return countEnterKeys;
};
