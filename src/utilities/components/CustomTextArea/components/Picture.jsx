import { useDrag } from 'react-dnd';

const Picture = ({ id, url }) => {
  const [{ isDragging }, drag] = useDrag(() => {
    return {
      type: 'textarea',
      item: { id },
      collect: (monitor) => {
        return { isDragging: !!monitor.isDragging() };
      },
    };
  });

  return (
    <img
      ref={drag}
      src={url}
      alt="hello"
      width="150px"
      style={{ border: isDragging ? '10px solid blue' : '0px' }}
    />
  );
};

export default Picture;
