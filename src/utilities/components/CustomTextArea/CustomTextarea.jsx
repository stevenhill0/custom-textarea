import TextareaView from './components/TextareaView';
import { useCountLines } from './helper/useCountLines';
import { controlHeight } from './helper/controlTextareaHeight';
import { controlWidth } from './helper/controlTextareaWidth';
import { characterCount } from './helper/characterCount';
import { useState, useEffect } from 'react';

const CustomTextarea = () => {
  const [textareaHeight, setTextareaHeight] = useState(1);
  const [textareaWidth, setTextareaWidth] = useState(1);
  const [characterArray, setcharacterArray] = useState([]);
  const [lineCount, setLineCount] = useState([]);
  const [keyPress, setKeyPress] = useState({});
  const [widthAndHeight, setWidthAndHeight] = useState({});
  const [linesArray, setLinesArray] = useState([0]);
  const [characters, setCharacters] = useState(0);

  const storeKeysEvent = (event) => {
    setKeyPress(event);
    setCharacters(event.target.value.length);

    if (event.key === 'Enter') {
      setcharacterArray((prevCharacters) => {
        return [...prevCharacters, event.target.value.length];
      });
    }
  };
  const { firstLine } = characterCount(characterArray, keyPress);
  useCountLines(keyPress, characterArray, setLineCount);

  useEffect(() => {
    if (keyPress.key === 'Enter') {
      const lineArray = lineCount.filter((lines) => {
        return lines > 0;
      });

      lineArray.unshift(firstLine);

      setLinesArray(lineArray);
    }
  }, [
    keyPress.key,
    lineCount,
    firstLine,
    textareaHeight,
    textareaWidth,
    widthAndHeight,
  ]);

  const { height, width } = widthAndHeight;

  const largestLine = linesArray.reduce((previousLine, currentLine) => {
    return previousLine > currentLine ? previousLine : currentLine;
  });

  const storedCharaters = linesArray.reduce((previousLine, currentLine) => {
    return previousLine + currentLine;
  });

  const result =
    keyPress.key === 'Enter'
      ? characters + 1 - storedCharaters
      : characters + 1 - storedCharaters;

  console.log('Line Array last line: ' + linesArray[linesArray.length - 1]);
  console.log(
    'Line Array second last line: ' + linesArray[linesArray.length - 2]
  );
  console.log('Stored characters: ' + storedCharaters);
  console.log('Current characters: ' + characters);
  console.log('Keypress: ' + keyPress.key);
  console.log('Largest line is' + largestLine);
  console.log('reset characters: ' + result);

  if (linesArray[0] === 0 && keyPress.key !== 'Enter') {
    controlWidth(width, textareaWidth, setTextareaWidth);
  } else if (result > largestLine) {
    controlWidth(width, textareaWidth, setTextareaWidth);
  }

  controlHeight(height, textareaHeight, setTextareaHeight);

  const measureEvent = (event) => {
    const height = event.target.scrollHeight;
    const width = event.target.scrollWidth;

    setWidthAndHeight({
      height,
      width,
    });
  };

  return (
    <div>
      <TextareaView
        controlHeight={textareaHeight}
        controlWidth={textareaWidth}
        handleEvent={measureEvent}
        controlEnterKey={storeKeysEvent}
      />
    </div>
  );
};

export default CustomTextarea;
