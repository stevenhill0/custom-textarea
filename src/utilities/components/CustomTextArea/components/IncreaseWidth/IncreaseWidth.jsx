import { useWidthState } from '../../helper/useWidthState';
import { EventDataContext } from '../../helper/EventDataContext';

import { useContext } from 'react';

export const IncreaseWidth = () => {
  const value = useContext(EventDataContext);

  /**
   * Custom Hooks
   */

  useWidthState(value);

  return null;
};
