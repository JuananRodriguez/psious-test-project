import PropTypes from 'prop-types';
import TimeLine from '../TimeLine';
import { TimelineZone } from '../Layout.styled';

const TimelineArea = ({ setConsoleOutside }) => (
  <TimelineZone>
    <TimeLine setConsoleOutside={setConsoleOutside} />
  </TimelineZone>
);

TimelineArea.propTypes = {
  setConsoleOutside: PropTypes.func.isRequired,
};

export default TimelineArea;
