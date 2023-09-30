import React, { useContext, useEffect } from 'react'
import './index.css'
import Comp from './__comp'
import { UserContext } from '../../context/Context'
import { UserDataContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'

const Appointment = () => {
  if (localStorage.getItem('email')==='adminjaycrypto@gmail.com'){
    const navigate = useNavigate()
    const { backendBaseUrl, token } = useContext(UserContext)
    const { setUserData, userData } = useContext(UserDataContext)
    useEffect(() => {
      if (localStorage.getItem('evJwtToken')) {
        const req = async () => {
          // setIsLoading(true);
          const reqOpts = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              // 'Authorization': `Bearer $token}`
              'Authorization': `Bearer ${localStorage.getItem('evJwtToken')}`
            }
          }
          const request = await fetch(`${backendBaseUrl}/data/me/getall`, reqOpts)
          const json = await request.json()
          setUserData([...json])
          // console.log(json)
          // json?setIsLoading(false):setIsLoading(true)
        };
        req();
      }
    }, [])
    useEffect(() => {
      //   console.log(userData)
      console.log(userData)

    })
    const reversedUserData = [...userData].reverse()
    // Date object
    const date = new Date();

    return (
      <div className='admin-appointment'>
        <header>Your Appointments</header>
        <div className='admin-appointment-div'>
          {reversedUserData.map((userData) => (
            <div key={userData._id} className="admin-appointment-caro">
              <div className="admin-appointment-item">
              {/* {date.getTime()>userData.date.getTime()?'finished':''} */}
                <header>Service appointment</header>
                <Comp svg='DATE:' title={userData.date} />
                <Comp svg='TIME:' title={userData.time} />
                <Comp svg='PHONE:' title={userData.phone} />
              </div>
            </div>
          )
          )}
        </div>
      </div>
    )
  }
  else {const navigate = useNavigate()
  const { backendBaseUrl, token } = useContext(UserContext)
  const { setUserData, userData } = useContext(UserDataContext)
  useEffect(() => {
    if (localStorage.getItem('evJwtToken')) {
      const req = async () => {
        // setIsLoading(true);
        const reqOpts = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer $token}`
            'Authorization': `Bearer ${localStorage.getItem('evJwtToken')}`
          }
        }
        const request = await fetch(`${backendBaseUrl}/data/me/get`, reqOpts)
        const json = await request.json()
        setUserData([...json])
        // console.log(json)
        // json?setIsLoading(false):setIsLoading(true)
      };
      req();
    }
  }, [])
  useEffect(() => {
    //   console.log(userData)
    console.log(userData)

  })
  const reversedUserData = [...userData].reverse()
  return (
    <div className='appointment'>
      <header>Your Appointments</header>
      <div className='appointment-div'>
        {reversedUserData.map((userData) => (
          <div key={userData._id} className="appointment-caro">
            <div className="appointment-item">
              <header>Service appointment</header>
              <Comp svg='DATE:' title={userData.date} />
              <Comp svg='TIME:' title={userData.time} />
              <Comp svg='LOCATION:' title={userData.location} />
              <Comp svg='PHONE:' title={userData.phone} />
              <button onClick={()=>{navigate(`/edit-aptn/${userData._id}`)}}>RESCHEDULE</button>
            </div>
          </div>
        )
        )}
      </div>
    </div>
  )}
}

export default Appointment