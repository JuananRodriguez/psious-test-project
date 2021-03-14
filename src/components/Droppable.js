import { useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import DragAndDropCtxt from '../contexts/DragAndDropCtxt';

function Droppable({ children, onDrop }) {
  const { draggedNode } = useContext(DragAndDropCtxt);
  const ref = useRef(null);

  function getUserDropX(ev) {
    const { clientX } = ev;
    const { x } = ref.current.getBoundingClientRect();
    return clientX - x;
  }

  function getUserDropY(ev) {
    const { clientY } = ev;
    const { y } = ref.current.getBoundingClientRect();
    return clientY - y;
  }

  function handledDrop(ev) {
    ev.preventDefault();
    const {
      node,
      clickPosition: { clickY, clickX },
    } = draggedNode;
    const yPos = getUserDropY(ev) - clickY;
    const xPos = getUserDropX(ev) - clickX;
    onDrop({ node, yPos, xPos });
  }

  function allowDrop(ev) {
    ev.preventDefault();
  }

  return (
    <div ref={ref} onDrop={handledDrop} onDragOver={allowDrop}>
      {children}
    </div>
  );
}

Droppable.propTypes = {
  children: PropTypes.node.isRequired,
  onDrop: PropTypes.func.isRequired,
};

export default Droppable;
