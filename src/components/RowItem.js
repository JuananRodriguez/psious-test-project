import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Rnd } from 'react-rnd';

const RESIZE_ALLOWED_DIRECTIONS = {
  top: false,
  right: true,
  bottom: false,
  left: true,
  topRight: false,
  bottomRight: false,
  bottomLeft: false,
  topLeft: false,
};

const RowItemWrapper = styled.div`
  padding: 1px 0;
  z-index: 1;

  & > div.content {
    width: 100%;
    height: 100%;
    display: inline-block;
    position: relative;

    & .remove-button {
      position: absolute;
      top: 0;
      right: 0;
    }
  }

  &:active {
    opacity: 0.5;
  }
`;

function RowItem({ id, offset, rowIndex, rowHeight, onResize, onDrop, onRemove, width, children }) {
  const handleDrag = (e, { lastX, lastY }) => {
    onDrop(rowIndex, { id, lastY, lastX });
  };

  const handleResize = (e, direction, ref) => {
    const lastWidth = ref.offsetWidth;
    if (ref.style.width !== width) {
      onResize(rowIndex, { id, lastWidth }, direction);
    }
  };

  function handleRemoveItem() {
    onRemove(rowIndex, id);
  }

  return (
    <Rnd
      key={id}
      onDragStop={handleDrag}
      onResizeStop={handleResize}
      as={RowItemWrapper}
      enableResizing={RESIZE_ALLOWED_DIRECTIONS}
      size={{ width, height: rowHeight }}
      position={{ x: offset, y: 0 }}>
      <div className="content">
        {children}
        <button onClick={handleRemoveItem} type="button" className="remove-button">
          X
        </button>
      </div>
    </Rnd>
  );
}

RowItem.propTypes = {
  id: PropTypes.string.isRequired,
  rowHeight: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
  rowIndex: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  onResize: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default RowItem;
