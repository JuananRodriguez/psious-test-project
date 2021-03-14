import { render } from '@testing-library/react';
import App from './App';

jest.mock('./components/zones/InitialElementArea', () => ({
  __esModule: true,
  default: () => <>InitialElementArea</>,
}));
jest.mock('./components/zones/ConfigurationArea', () => ({
  __esModule: true,
  default: () => <>ConfigurationArea</>,
}));
jest.mock('./components/zones/TimelineArea', () => ({
  __esModule: true,
  default: () => <>TimelineArea</>,
}));

test('should render all mocked componentes', () => {
  const { getByText, debug } = render(<App />);
  debug();
  const InitialElementAreaNode = getByText(/InitialElementArea/i);
  expect(InitialElementAreaNode).toBeInTheDocument();

  const ConfigurationAreaNode = getByText(/ConfigurationArea/i);
  expect(ConfigurationAreaNode).toBeInTheDocument();

  const TimelineAreaNode = getByText(/TimelineArea/i);
  expect(TimelineAreaNode).toBeInTheDocument();
});
