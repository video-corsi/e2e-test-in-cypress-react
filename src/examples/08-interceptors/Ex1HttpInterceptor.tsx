import axios from 'axios';
import { FormEvent, useState } from 'react';

export default function () {
  const [sent, setSent] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  function submitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    axios
      .post(`https://jsonplaceholder.typicode.com/users`, {
        username: 'Fabio'
      })
      .then(() => {
        setSent(true);
      }).
    catch(()=>{
      setError(true);
    })
  }

  return (
    <div>
      {sent && <div className="alert alert-success">Success!</div>}
      {error && <div className="alert alert-danger">Error!</div>}

      <form onSubmit={submitForm}>
        <button type="submit">SUBMIT</button></form>
    </div>
  )
}