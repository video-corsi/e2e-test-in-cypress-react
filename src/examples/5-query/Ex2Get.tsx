export default function() {
  return (
    <div>
      <div>
        <h1>Hello Cypress</h1>
        <h1 className="hello">Hello Class</h1>
        <h1 data-testid="hello">Hello DataTest</h1>
        <div style={{ fontSize: 10}}>Hello Style</div>
        <input
          type="text"
          name="firstname"
          value="Fabio Biondi"
        />
      </div>
    </div>
  )
}
