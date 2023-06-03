import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
}

export default function () {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => setUsers(res));
  }, [])

  return (
    <div>
      <ul>
        {
          users
            .map(item => <li key={item.id}>{item.name}</li>)
        }
      </ul>
    </div>
  )
}