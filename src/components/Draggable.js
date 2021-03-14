import { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import DragAndDropCtxt from '../contexts/DragAndDropCtxt';

const Draggable = ({ children }) => {
  const { setDraggedNode } = useContext(DragAndDropCtxt);
  const ref = useRef(null);

  function getUserClickOnX(ev) {
    const { clientX } = ev;
    const { x } = ref.current.getClientRects()[0];
    return clientX - x;
  }

  function getUserClickOnY(ev) {
    const { clientY } = ev;
    const { y } = ref.current.getClientRects()[0];
    return clientY - y;
  }

  function handleDragStart(ev) {
    const clickPosition = { clickX: getUserClickOnX(ev), clickY: getUserClickOnY(ev) };
    setDraggedNode(children, clickPosition, ev);
  }

  return (
    <div
      ref={ref}
      draggable="true"
      onDragStart={handleDragStart}
      style={{ position: 'relative', width: 200, margin: 15, height: 60 }}>
      {children}
    </div>
  );
};

Draggable.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Draggable;
