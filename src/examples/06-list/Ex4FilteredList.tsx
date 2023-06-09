import { useState } from 'react';
import {myList} from "../../data";

export default function () {
  const [text, setText] = useState('')

  const filteredList = myList.filter(item => item.includes(text));

  return (
    <div>

      <input type="text" onInput={(e) => {
        setText(e.currentTarget.value)
      }}/>
      <main>
        {
          filteredList
            .map(item => <article key={item}>{item}</article>)
        }
      </main>
    </div>
  )
}