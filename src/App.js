import { useState } from 'react';
import './App.css';
import DragAndDropProvider from './contexts/DragAndDropProvider';
import InitialElementArea from './components/zones/InitialElementArea';
import ConfigurationArea from './components/zones/ConfigurationArea';
import TimelineArea from './components/zones/TimelineArea';
import { EditorWrapper } from './components/Layout.styled';

function App() {
  const [consoleOutside, setConsoleOutside] = useState([]);

  return (
    <DragAndDropProvider>
      <EditorWrapper>
        <InitialElementArea />
        <ConfigurationArea consoleOutside={consoleOutside} />
        <TimelineArea setConsoleOutside={setConsoleOutside} />
      </EditorWrapper>
    </DragAndDropProvider>
  );
}

export default App;
