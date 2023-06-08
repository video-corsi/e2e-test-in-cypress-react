import { useState } from 'react';

export default function () {
  const [msg, setMsg] = useState('');

  return (
    <div>
      {msg && <div>{msg}</div>}

      <input type="text" onKeyDown={e => {
        if (e.key === 'Enter') {
          setMsg(e.currentTarget.value);
        }
      }}/>
    </div>
  )
}