// import { ThemeProvider } from './ThemeToggle/ThemeContext';
// import { ThemeToggle } from './ThemeToggle/ThemeToggle';
import { PipelineToolbar } from './PipelineToolbar';
import { PipelineUI } from './PipelineUI';
import { SubmitButton } from './SubmitButton';

function App() {
  return (
    <>
    {/* // <ThemeProvider> */}
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
      {/* // <ThemeToggle /> */}
    {/* // </ThemeProvider> */}
    </>
    
  );
}

export default App;
