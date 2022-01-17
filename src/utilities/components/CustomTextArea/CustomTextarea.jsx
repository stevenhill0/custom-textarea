import TextareaView from './components/TextareaView';
import { resizeTextArea } from './helper/resizeTextArea';
import { useCountLines } from './helper/useCountLines';
import { useState } from 'react';

const CustomTextarea = () => {
  const [textareaHeight, setTextareaHeight] = useState(1);
  const [textareaWidth, setTextareaWidth] = useState(1);
  const [characterArray, setcharacterArray] = useState([]);
  const [lineCount, setLineCount] = useState([]);
  const [keyPress, setkeyPress] = useState({});

  const handleEvent = (event) => {
    const args = [
      event,
      textareaHeight,
      setTextareaHeight,
      textareaWidth,
      setTextareaWidth,
      characterArray,
    ];
    resizeTextArea(...args);
  };

  const storeKeyAndCount = (event) => {
    const {
      key,
      target: {
        value: { length },
      },
    } = event;

    setkeyPress({ key: key, length: length + 1 });

    if (event.key === 'Enter') {
      setcharacterArray((prevCharacters) => {
        return [...prevCharacters, event.target.value.length];
      });
    }
  };

  useCountLines(keyPress, characterArray, lineCount, setLineCount);

  return (
    <div>
      <TextareaView
        controlHeight={textareaHeight}
        controlWidth={textareaWidth}
        handleEvent={handleEvent}
        controlEnterKey={storeKeyAndCount}
      />
    </div>
  );
};

export default CustomTextarea;
