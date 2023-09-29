import React, { useContext, useState } from 'react'
import './index.css'
import { UserContext } from '../../context/Context';
import { UserDataContext } from '../../context/UserContext';
import { useParams } from 'react-router-dom';

const ReBook = () => {
  const {id} = useParams();
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    text: '',
  })
  const { backendBaseUrl, token } = useContext(UserContext)
  const { userData } = useContext(UserDataContext)
  const api = `${backendBaseUrl}/data/me/patch/${id}`
  async function handleSubmit(e) {
    e.preventDefault();
    const requestOptions = {
      method: 'PATCH',
      body: JSON.stringify({
        date: formData.date,
        time: formData.time,
      }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    }
    const response = await fetch(api, requestOptions)
    const data = await response.json();
    console.log(data)
  }
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    })
    )
  }
  return (
    <div className='Book'>
      <form action="submit" onSubmit={handleSubmit}>
        <header>Reschedule the appointment</header>
        <h3>Date:</h3>
        <input onChange={onChange} type="date" name="date" id="" />
        <h3>Time:</h3>
        <input onChange={onChange} type="time" name="time" id="" />
        <h3>Additional message:{userData._id}</h3>
        <textarea onChange={onChange} placeholder='write any addtional info' name="text" id="" cols="30" rows="10"></textarea>
        <button type="submit">Reschedule</button>
      </form>
    </div>
  )
}

export default ReBook