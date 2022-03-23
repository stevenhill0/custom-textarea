/* eslint-disable jsx-a11y/no-autofocus */
import { useWidthState } from '../../helper/useWidthState';
import { useHeightState } from '../../helper/useHeightState';

import { EventDataContext } from '../../helper/EventDataContext';
import { useContext } from 'react';

import './styles.css';

export const TextareaView = ({ onKeyDown }) => {
  /**
   * React Hooks
   */

  const keyDownEventData = useContext(EventDataContext);

  /**
   * Custom Hooks
   */

  const controlWidth = useWidthState(keyDownEventData);
  const controlHeight = useHeightState(keyDownEventData);

  /**
   * Component
   */

  return (
    <textarea
      id="new"
      rows={controlHeight}
      cols={controlWidth}
      className="custom-textArea textBox"
      autoFocus
      onKeyDown={onKeyDown}
    ></textarea>
  );
};
