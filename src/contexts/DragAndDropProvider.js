import PropTypes from 'prop-types';
import { cloneElement, useState } from 'react';
import DragAndDropCtxt from './DragAndDropCtxt';

const DragAndDropProvider = ({ children }) => {
  const [draggedNode, _setDraggedNode] = useState(null);

  const setDraggedNode = (reactNode, clickPosition) => {
    _setDraggedNode({ node: cloneElement(reactNode), clickPosition });
  };

  const setters = {
    setDraggedNode,
  };

  const values = { draggedNode };
  return <DragAndDropCtxt.Provider value={{ ...values, ...setters }}>{children}</DragAndDropCtxt.Provider>;
};

DragAndDropProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DragAndDropProvider;
