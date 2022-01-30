import Picture from './Picture';
import { useState } from 'react';
import { useDrop } from 'react-dnd';
import '../../../../pages/App/App.css';

const pictureList = [
  {
    id: 1,
    url: 'https://yt3.ggpht.com/ytc/AAUvwnjOQiXUsXYMs8lwrd4litEEqXry1-atqJavJJ09=s900-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 2,
    url: 'https://yt3.ggpht.com/pe57RF1GZibOWeZ9GwRWbjnLDCK2EEAeQ3u4iMAFNeaz-PN9uSsg1p2p32TZUedNnrUhKfoOuMM=s900-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 3,
    url: 'https://yt3.ggpht.com/pe57RF1GZibOWeZ9GwRWbjnLDCK2EEAeQ3u4iMAFNeaz-PN9uSsg1p2p32TZUedNnrUhKfoOuMM=s900-c-k-c0x00ffffff-no-rj',
  },
];

const DragAndDrop = () => {
  const [board, setBoard] = useState([]);

  const addImageToBoard = (id) => {
    const pictures = pictureList.filter((picture) => {
      return id === picture.id;
    });
    setBoard((board) => {
      return [...board, pictures[0]];
    });
  };

  const [, drop] = useDrop(() => {
    return {
      accept: 'textarea',
      drop: (item) => {
        return addImageToBoard(item.id);
      },
      collect: (monitor) => {
        return { isOver: !!monitor.isOver() };
      },
    };
  });

  return (
    <>
      <div className="Pictures App">
        {pictureList.map((picture) => {
          return <Picture url={picture.url} id={picture.id} key={picture.id} />;
        })}
      </div>

      <div className="Board" ref={drop}>
        {board.map((picture) => {
          return <Picture url={picture.url} id={picture.id} key={picture.id} />;
        })}
      </div>
    </>
  );
};

export default DragAndDrop;
