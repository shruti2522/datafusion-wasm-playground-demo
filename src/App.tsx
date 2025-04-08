import './App.css'
import * as datafusion_wasm from 'datafusion-wasm'
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import InputArea from './components/InputArea.tsx';
import { Sidebar } from './components/Sidebar.tsx';


console.log(datafusion_wasm.DataFusionContext.greet())
export const dfCtx = datafusion_wasm.DataFusionContext.new()

function App() {
  return (
    <MantineProvider>
      <main className="h-svh w-screen">
        <div className="sidebar">
          <Sidebar />
        </div>
          <InputArea />
      </main>
    </MantineProvider>
  )
}

export default App
