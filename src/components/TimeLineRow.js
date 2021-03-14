import PropTypes from 'prop-types';
import styled from 'styled-components';

const TimeLineRowWrapper = styled.div`
  position: relative;
  width: ${(p) => p.colWidth * p.colNumber}px;
  height: ${(p) => p.rowHeight}px;
  background: grey;
  box-shadow: inset 0px 0px 0px 1px #101010;
`;

function TimeLineRow({ colNumber, colWidth, rowHeight, onRemove, children, id }) {
  function handleRemoveRow() {
    onRemove(id);
  }

  return (
    <>
      <TimeLineRowWrapper colWidth={colWidth} colNumber={colNumber} rowHeight={rowHeight}>
        {children}
        <button onClick={handleRemoveRow} type="button">
          X
        </button>
      </TimeLineRowWrapper>
    </>
  );
}

TimeLineRow.propTypes = {
  children: PropTypes.node.isRequired,
  colNumber: PropTypes.number.isRequired,
  colWidth: PropTypes.number.isRequired,
  rowHeight: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default TimeLineRow;
