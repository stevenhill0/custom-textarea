import { DraggableDiv } from './components/DraggableDiv';
import { useState, useCallback } from 'react';
import { useDrop } from 'react-dnd';

export const DragArea = () => {
  const [boxes, setBoxes] = useState({
    a: { top: 20, left: 180 },
  });

  /**
   * State
   */

  const moveBox = useCallback(
    (id, top, left) => {
      setBoxes({ ...boxes, [id]: { top, left } });
    },
    [boxes],
  );

  /**
   * Library
   */

  const [, drop] = useDrop(() => {
    return {
      accept: 'textarea',
      drop: (item, monitor) => {
        const delta = monitor.getDifferenceFromInitialOffset();
        let left = Math.round(item.left + delta.x);
        let top = Math.round(item.top + delta.y);

        moveBox(item.id, top, left);
      },
      // collect: (monitor) => {
      //   return { isOver: !!monitor.isOver() };
      // },
    };
  }, [moveBox]);

  /**
   * Component
   */

  return (
    <>
      <div className="Board" ref={drop}>
        {Object.keys(boxes).map((key) => {
          return <DraggableDiv key={key} id={key} {...boxes[key]} />;
        })}
      </div>
    </>
  );
};
