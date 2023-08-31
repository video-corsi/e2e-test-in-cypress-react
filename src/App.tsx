import { useRoutes } from 'react-router-dom';
import Navbar from './core/Navbar';
import { routes } from './routes';

function App() {
  const element = useRoutes(routes)
  return (
    <>
      <Navbar />

      <div className="mx-auto max-w-screen-lg mt-6">
        {element}
      </div>
    </>
  )
}

export default App
