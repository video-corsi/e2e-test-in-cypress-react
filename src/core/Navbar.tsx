import { ChangeEvent } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../routes';

export default function() {
  const navigate = useNavigate();
  const location = useLocation();

  function changePage(e: ChangeEvent<HTMLSelectElement>) {
    navigate(e.currentTarget.value)
  }

  return <div className="w-full h-16 bg-slate-900 flex justify-between items-center px-6">
    <NavLink to="/home" className="text-white text-2xl ">
      Cypress Examples
    </NavLink>

    <select onChange={changePage} defaultValue={location.pathname} className="h-8">
      {
        routes.map(route => {
          return <option key={route.path} value={route.path} >
            { route.path}
          </option>
        })
      }
    </select>
  </div>
}
