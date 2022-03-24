import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useState } from 'react';
import { DragArea } from '../../utilities/components/DragAndDrop/DragArea';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const switchOn = () => {
    return setCounter(1);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <div
          className="Board"
          tabIndex="0"
          role="textbox"
          onClick={switchOn}
          onKeyPress={switchOn}
        >
          {counter === 1 ? <DragArea /> : null}
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
