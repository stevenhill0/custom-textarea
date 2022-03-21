/* eslint-disable jsx-a11y/no-autofocus */
import { useWidthState } from '../../helper/useWidthState';
import { useHeightState } from '../../helper/useHeightState';

import { EventDataContext } from '../../helper/EventDataContext';
import { useContext } from 'react';

import './styles.css';

export const TextareaView = ({ onKeyDown }) => {
  const keyDownEventData = useContext(EventDataContext);

  /**
   * Custom Hooks
   */

  const controlWidth = useWidthState(keyDownEventData);
  const controlHeight = useHeightState(keyDownEventData);

  return (
    /**
     * Component
     */

    <textarea
      id="new"
      rows={controlHeight}
      cols={controlWidth}
      className="custom-textArea textbox"
      autoFocus
      onKeyDown={onKeyDown}
    ></textarea>
  );
};
