import { useState } from 'react';

export function Ex1AMouseEvents () {
  const [visible, setVisible] = useState(false);

  return (
    <div>

      <button
        onClick={() => setVisible(prev => !prev)}
      >
        Click Me
      </button>

      {visible && <div>Button Clicked!</div>}

    </div>
  )
}

export function Ex1BMouseEvents () {
  const [visible, setVisible] = useState(false);

  return (
    <div>

      <button
        onMouseOver={() => setVisible(true)}
        onMouseOut={() => setVisible(false)}
      >
        Click Me
      </button>

      {visible && <div>Button Clicked!</div>}

    </div>
  )
}