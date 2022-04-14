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

  const currentWidth = useWidthState(keyDownEventData);
  const { textareaRef, textAreaChange } = useHeightState(keyDownEventData);

  //* Commented out: simple version of auto height - it still does not change state on time: use in onChange attribute
  // const test = (event) => {
  //   event.target.style.height = '5px';
  //   const scrollHeight = event.target.scrollHeight;
  //   event.target.style.height = scrollHeight + 'px';
  // };

  /**
   * Component
   */

  return (
    <textarea
      ref={textareaRef}
      // id="new"
      // rows={currentHeight}
      // cols={currentWidth}
      className="custom-textarea"
      autoFocus
      onKeyDown={onKeyDown}
      onChange={textAreaChange}
    ></textarea>
  );
};
