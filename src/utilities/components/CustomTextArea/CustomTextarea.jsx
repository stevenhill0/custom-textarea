import TextareaView from './components/TextareaView';
import { resizeTextArea } from './helper/resizeTextArea';
import { countCharacters } from './helper/countCharacters.js';
import { useState } from 'react';

const CustomTextarea = () => {
  const [textareaHeight, setTextareaHeight] = useState(1);
  const [textareaWidth, setTextareaWidth] = useState(1);
  const [characterCount, setCharacterCount] = useState(0);
  const [characterArray, setcharacterArray] = useState([]);

  const handleEvent = (event) => {
    const args = [
      event,
      textareaHeight,
      setTextareaHeight,
      textareaWidth,
      setTextareaWidth,
    ];
    resizeTextArea(...args);
  };

  const pressEnterToCount = (event) => {
    const args = [
      event,
      characterCount,
      setCharacterCount,
      characterArray,
      setcharacterArray,
    ];
    countCharacters(...args);
  };

  const lastNumber = characterArray[characterArray.length - 1];
  const secondLast = characterArray[characterArray.length - 2];
  const first = characterArray[0] + 1;
  const result = lastNumber - secondLast - 1;
  console.log('First Line : ' + first);
  console.log('Last Line : ' + result);

  // console.log(`characterCount: ${characterCount}`);
  console.log(`characterArray: ${characterArray}`);

  return (
    <div>
      <TextareaView
        controlHeight={textareaHeight}
        controlWidth={textareaWidth}
        handleEvent={handleEvent}
        controlEnterKey={pressEnterToCount}
      />
    </div>
  );
};

export default CustomTextarea;
