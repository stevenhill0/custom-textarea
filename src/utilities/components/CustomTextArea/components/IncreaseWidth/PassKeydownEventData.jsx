import { useWidthState } from '../../helper/useWidthState';
import { EventDataContext } from '../../helper/EventDataContext';

import { useContext } from 'react';

export const PassKeyDownEventData = () => {
  /**
   * React Hooks
   */

  const keyDownEventData = useContext(EventDataContext);

  /**
   * Custom Hooks
   */

  useWidthState(keyDownEventData);

  /**
   * Returned Value
   */

  return null;
};
