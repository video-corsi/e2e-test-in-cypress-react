export default function () {
  return (
    <div>
      <h1>Hello Cypress</h1>
      <input type="text" name="hello" onKeyDown={e => {
        if (e.key === 'Enter') {
          window.location.href = e.currentTarget.value;
        }
      }}/>
    </div>
  )
}
