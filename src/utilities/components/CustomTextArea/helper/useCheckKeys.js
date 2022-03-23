import { EventDataContext } from './EventDataContext';

import { useContext } from 'react';

export const useCheckKeys = () => {
  /**
   * React Hooks
   */

  const keyDownEventData = useContext(EventDataContext);
  const { keyPress } = keyDownEventData;

  /**
   * Logic
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
   * Returned Value
   */

  return pressedKey;
};
