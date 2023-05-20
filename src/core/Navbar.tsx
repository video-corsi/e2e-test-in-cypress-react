import { ChangeEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../routes';

export default function() {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location)
  function changePage(e: ChangeEvent<HTMLSelectElement>) {
    navigate(e.currentTarget.value)
  }

  return <select onChange={changePage} defaultValue={location.pathname}>
    {
      routes.map(route => {
        return <option key={route.path} value={route.path} >
          { route.path}
        </option>
      })
    }
  </select>
}
