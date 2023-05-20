import { useRoutes } from 'react-router-dom';
import Navbar from './core/Navbar';
import { routes } from './routes';

function App() {
  const element = useRoutes(routes)
  return (
    <>
      <Navbar />
      <hr/>
      {element}
    </>
  )
}

export default App
