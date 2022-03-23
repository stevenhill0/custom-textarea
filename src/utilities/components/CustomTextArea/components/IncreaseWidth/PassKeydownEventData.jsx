import { useWidthState } from '../../helper/useWidthState';
import { EventDataContext } from '../../helper/EventDataContext';

import { useContext } from 'react';

export const PassKeyDownEventData = () => {
  /**
   * React Hooks
   */

  const value = useContext(EventDataContext);

  /**
   * Custom Hooks
   */

  useWidthState(value);

  /**
   * Returned Value
   */

  return null;
};
