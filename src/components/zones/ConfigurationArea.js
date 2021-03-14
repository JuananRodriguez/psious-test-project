import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import { JSONZone } from '../Layout.styled';

const ConfigurationArea = ({ consoleOutside = [] }) => (
  <JSONZone>
    <ReactJson
      displayObjectSize={false}
      displayDataTypes={false}
      quotesOnKeys={false}
      displayArrayKey={false}
      name={null}
      src={[...consoleOutside]}
      theme="grayscale"
    />
  </JSONZone>
);

ConfigurationArea.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  consoleOutside: PropTypes.array.isRequired,
};

export default ConfigurationArea;
