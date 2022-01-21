const TextareaView = ({ controlHeight, controlWidth, onType, onKeyPress }) => {
  return (
    <textarea
      id="new"
      rows={controlHeight}
      cols={controlWidth}
      onChange={onType}
      className="custom-textArea"
      autoFocus
      onKeyPress={onKeyPress}
    ></textarea>
  );
};

export default TextareaView;
