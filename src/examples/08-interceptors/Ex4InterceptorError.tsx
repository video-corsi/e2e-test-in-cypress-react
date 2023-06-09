import axios from 'axios';
import { useEffect, useState } from 'react';

export interface User {
  id: number;
  name: string;
  username: string;
}

export default function () {
  const [list, setList] = useState<User[]>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get<User[]>(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => setList(res.data))
      .catch(() => {
        setError(true)
      });
  }, []);


  function deleteItem(id: number) {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        setList((s) => s.filter((p) => p.id !== id));
      })
      .catch(() => {
        setError(true)
      });
  }
  return (
    <div>
      {error && <div className="alert alert-danger">server error</div>}

      <ul data-testid="userList">
        {list.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.name} ({item.username})</span>
              <button type="button" onClick={() => deleteItem(item.id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>

    </div>
  )
}