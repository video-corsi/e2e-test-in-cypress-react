import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function () {
  const [formData, setFormData] = useState({ username: '', password: ''})
  const navigate = useNavigate();

  function changeHandler(e: ChangeEvent<HTMLInputElement>) {
    const key = e.currentTarget.name;
    const value = e.currentTarget.value;
    setFormData(s => ({...s, [key]: value}))
  }

  const isUserNameValid = formData.username.length > 3;
  const isPasswordValid = formData.password.length > 3;
  const isFormValid = isUserNameValid && isPasswordValid

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={changeHandler}
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={changeHandler}
      />
      <button onClick={() => navigate('/9-commands-page-object/home-example')} disabled={!isFormValid}>SIGN IN</button>
    </div>
  )
}
