import { createContext } from 'react';

const DragAndDropCtxt = createContext({ draggedNode: null, setDraggedNode: () => {} });

export default DragAndDropCtxt;
