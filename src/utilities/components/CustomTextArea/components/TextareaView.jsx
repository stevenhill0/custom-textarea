const TextareaView = ({
  controlHeight,
  controlWidth,
  handleEvent,
  controlEnterKey,
}) => {
  return (
    <textarea
      id="new"
      rows={controlHeight}
      cols={controlWidth}
      onChange={handleEvent}
      className="custom-textArea"
      autoFocus
      onKeyPress={controlEnterKey}
    ></textarea>
  );
};

export default TextareaView;
