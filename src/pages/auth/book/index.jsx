import React, { useContext, useState } from 'react'
import './index.css'
import { UserContext } from '../../../context/Context';

const Book = () => {
// const event =
// 'summary': eventName,
// 'description': eventDescription,
// 'start': {
// },
// 'dateTime': start.toISOString(), // Date.toISOString() ->
// 'timezone': Intl.DateTimeFormat().resolvedOptions().timezone // America/Los_Angeles
// },
// }
// 'end': {
// 'dateTime': end.toIsoString(), // Date.toISOString() ->
// 'timeZone': Intl.DateTimeFormat().resolvedOptions().timezone // America/Los_Angeles
// await fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events", {
// method: "POST",
// headers: {
// },
// 'Authorization': 'Bearer + session. provider_token // Access token for google
// body: JSON.stringify(event)
// }).then((data) => {
// return data.json(); }).then((data) => {
// console.log(data);
// alert("Event created, check your Google Calendar!");
// });
// APIKEY=AIzaSyDrpwe2geRB6Co44w4YSdJA2JiDlKjrpHw
// CALENDAR=peterstephen22000@gmail.com
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    text: '',
    phone: '',
  })
  const { backendBaseUrl, token } = useContext(UserContext)
  const api = `${backendBaseUrl}/data/me/post`
  async function handleSubmit(e) {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({
        date: formData.date,
        time: formData.time,
        location: 'ff',
        phone: formData.phone,
      }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('evJwtToken')}`
        // 'Authorization': `Bearer ${token}`,
      }
    }
    const response = await fetch(api, requestOptions)
    const data = await response.json();
    response.status == 200 ? setFormData({
      date: '',
      time: '',
      text: '',
      phone: '',
    }) : ''
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
        <header>Schedule an appointment</header>
        <h3>Date:</h3>
        <input onChange={onChange} value={formData.date} type="date" name="date" id="" />
        <h3>Time:</h3>
        <input onChange={onChange} value={formData.time} type="time" name="time" id="" />
        <h3>Phone:</h3>
        <input onChange={onChange} value={formData.phone} type="tel" name="phone" id="" />
        <h3>Additional message:</h3>
        <textarea onChange={onChange} value={formData.text} placeholder='write any addtional info' name="text" id="" cols="30" rows="10"></textarea>
        <button type="submit">Schedule</button>
      </form>
    </div>
  )
}

export default Book