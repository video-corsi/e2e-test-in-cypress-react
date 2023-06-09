import clsx from 'clsx';
import { FormEvent, useState } from 'react';

export default function () {
  const [username, setUsername] = useState<string>('');
  const [sent, setSent] = useState<boolean>(false);

  function submitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }
  const isFormValid = username.length > 3;

  return (
    <div>
      <form className={'panel'} onSubmit={submitForm}>

        {sent && <div className="alert alert-success">Success!</div>}

        <input
          type="text"
          className={clsx('form-control', {'is-invalid': !isFormValid})}
          placeholder="Write your name"
          disabled={sent}
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button
          className="btn btn-primary"
          type="submit" disabled={sent || !isFormValid}>
          {sent ? "SENT" : "SUBMIT FORM"}
        </button>

      </form>

    </div>
  )
}