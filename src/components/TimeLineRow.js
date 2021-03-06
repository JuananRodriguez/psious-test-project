import PropTypes from 'prop-types';
import styled from 'styled-components';

const TimeLineRowWrapper = styled.div`
  width: ${(p) => p.widthCols * 10}px;
  height: 40px;
  background: grey;
  margin: 1px;
`;

function TimeLineRow({ cols, children, onRemove, id }) {
  function handleRemoveRow() {
    onRemove(id);
  }

  return (
    <>
      <TimeLineRowWrapper widthCols={cols}>{children}</TimeLineRowWrapper>
      <button onClick={handleRemoveRow} type="button">
        X
      </button>
    </>
  );
}

TimeLineRow.defaultProps = {
  cols: 100,
};

TimeLineRow.propTypes = {
  children: PropTypes.node.isRequired,
  cols: PropTypes.number,
  onRemove: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default TimeLineRow;
