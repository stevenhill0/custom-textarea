/* eslint-disable jsx-a11y/no-autofocus */
import './styles.css';

export const TextareaView = ({ controlHeight, controlWidth, onKeyDown }) => {
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
