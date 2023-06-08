import { useState } from 'react';

const initialState = {
  firstName: 'Fabio',
  subscribe: true,
  date: new Date().toISOString().slice(0, 10),
  food: 2
}

export default function () {
  const [formData, setFormData] = useState(initialState);

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: 10}}>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={(e) => setFormData(s => ({ ...s, firstName: e.target.value}))}
      />

      <input
        type="checkbox"
        name="subscribe"
        checked={formData.subscribe}
        onChange={(e) => setFormData(s => ({ ...s, subscribe: e.target.checked}))}/>

      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={(e) => setFormData(s => ({ ...s, date: e.target.value}))}
      />

      <select
        value={formData.food}
        name="food"
        onChange={(e) => setFormData(s => ({ ...s, food: +e.target.value}))}
      >
        <option value="">Select something</option>
        <option value="1">Milk</option>
        <option value="2">Nutella</option>
        <option value="3">Bread</option>
      </select>

      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </form>
  )
}