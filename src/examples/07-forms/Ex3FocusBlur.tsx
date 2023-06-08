import clsx from 'clsx';
import { useState } from 'react';

export default function () {
  const [focused, setFocused] = useState(false);

  return (
    <div>
      <input
        type="text" name="username"
        className={clsx({ active: focused})}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  )
}