
import './App.css'

const gridItemsStyles = 'col bg-slate-100 p-5 h-96 lg:h-full overflow-y-auto'
function App() {

  return (
    <>
      <header className='p-5'>
        <h1 className='text-blue-700 text-lg font-medium'>Gerador de Box Shadow</h1>
      </header>

      <div className='grid grid-cols-1 lg:grid-cols-5 gap-4'>
        <div className={gridItemsStyles}>
          Shadows
        </div>
        <div className={`col-span-2 ${gridItemsStyles}`}>
          Preview
        </div>
        <div className={`col-span-2 ${gridItemsStyles}`}>
          Container props and Code
        </div>
      </div>
    </>
  )
}

export default App
