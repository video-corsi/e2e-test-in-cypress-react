import {myList} from "../../data";

export function Ex3AWrapEach () {
  return (
    <div>
      <main>
        {
          myList
            .map(item =>
              <article key={item}>{item}</article>
            )
        }
      </main>
    </div>
  )
}

export function Ex3BWrapEach () {
  return (
    <div>
      <main>
        {
          myList
            .map((item, i) =>
              <article key={item} className={'item'+i}>{item}</article>
            )
        }
      </main>
    </div>
  )
}