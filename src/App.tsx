import './App.css';
import { Container } from './components/Container';
import { ContainerProperties } from './components/ContainerProperties';
import { Shadows } from './components/Shadows';
import { ContextProvider } from './context';

const gridItemsStyles = 'col bg-slate-100 p-5 h-96 lg:h-full overflow-y-auto';
function App() {
  return (
    <ContextProvider>
      <header className='p-5'>
        <h1 className='text-blue-700 text-lg font-medium'>
          Gerador de Box Shadow
        </h1>
      </header>

      <div className='grid grid-cols-1 lg:grid-cols-5 gap-4 lg:h-[calc(100vh-5rem)]'>
        <div className={gridItemsStyles}>
          <Shadows />
        </div>
        <div className={`col-span-2 ${gridItemsStyles}`}>
          <Container />
        </div>
        <div className={`col-span-2 ${gridItemsStyles}`}>
          <ContainerProperties />
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
