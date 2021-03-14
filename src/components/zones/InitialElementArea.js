import styled from 'styled-components';
import Draggable from '../Draggable';
import { ClipZone } from '../Layout.styled';

const DraggablePiece = styled.div`
  height: 100%;
  background: white;
  cursor: move;
  color: black;
  text-align: center;
  font-size: 1.6rem;
`;

function InitialElementArea() {
  return (
    <ClipZone style={{ position: 'relative' }}>
      <Draggable>
        <DraggablePiece>a</DraggablePiece>
      </Draggable>

      <Draggable>
        <DraggablePiece>b</DraggablePiece>
      </Draggable>

      <Draggable>
        <DraggablePiece>c</DraggablePiece>
      </Draggable>
    </ClipZone>
  );
}

export default InitialElementArea;
