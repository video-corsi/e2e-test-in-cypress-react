import { useState } from 'react';

export default function () {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      {clicked && <div>Button Clicked!</div>}

      <button onClick={() => setClicked(prev => !prev)}>
        Click Me
      </button>
    </div>
  )
}