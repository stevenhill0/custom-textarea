/* eslint-disable jsx-a11y/no-autofocus */
const TextareaView = ({ controlHeight, controlWidth, onType, onKeyDown }) => {
  return (
    <textarea
      id="new"
      rows={controlHeight}
      cols={controlWidth}
      onChange={onType}
      className="custom-textArea"
      autoFocus
      onKeyDown={onKeyDown}
    ></textarea>
  );
};

export default TextareaView;
