import axios from 'axios';
import { useEffect, useState } from 'react';
import { User } from '../../model/user';

export default function () {
  const [list, setList] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get<User[]>(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => setList(res.data))
  }, []);

  return (
    <div>
      <h1 className="main_title">Home Page</h1>
      <ul data-testid="userList">
        {
          list.map((item) => <li key={item.id}>
              <span>{item.name}</span>
            </li>
          )}
      </ul>
    </div>
  )
}
