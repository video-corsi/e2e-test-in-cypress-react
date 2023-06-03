export default function () {
  const dynamic = 'item' + Date.now()

  return (
    <div>
      <div>
        <label htmlFor={dynamic}>First Name</label>
      </div>
      <div>
        <input type="text" id={dynamic}/>
      </div>
    </div>
  )
}