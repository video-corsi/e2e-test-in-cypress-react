export function Ex10AWithin () {
  return (
    <div>

      <form className="form-user">
        <h1>User</h1>
        <div>
          <label>Name</label>
          <input type="text"/>
        </div>
      </form>

      <form className="form-car">
        <h1>Car</h1>
        <div>
          <label>Name</label>
          <input type="text"/>
        </div>
      </form>

    </div>
  )
}

export function Ex10BWithin() {
  return (
    <div>

      <form className="form-user">
        <h1>User</h1>
        <div>
          <label>Name</label>
          <input type="text" value="Fabio"/>
        </div>
      </form>

      <form className="form-car">
        <h1>Car</h1>
        <div>
          <label>Name</label>
          <input type="text" value="Fiat"/>
        </div>
      </form>

    </div>
  )
}