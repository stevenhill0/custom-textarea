import { useWidthState } from '../../helper/useWidthState';

export const IncreaseWidth = ({ keyDownEventData }) => {
  /**
   * Custom Hooks
   */

  useWidthState(keyDownEventData);

  return null;
};
