import React, { useContext, useEffect } from 'react'
import "./index.css"
import { UserContext } from '../../context/Context'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import userN from '../../assets/svgs/user-ninja.svg'
import { UserDataContext } from '../../context/UserContext'

const Bookings = () => {
  const { backendBaseUrl } = useContext(UserContext)
  const { setUserData, userData } = useContext(UserDataContext)
  // useEffect(() => {
  //   if (localStorage.getItem('evJwtToken')) {
  //     const req = async () => {
  //       // setIsLoading(true);
  //       const reqOpts = {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'Authorization': `Bearer ${localStorage.getItem('evJwtToken')}`
  //         }
  //       }
  //       const request = await fetch(`${backendBaseUrl}/data/me/get`, reqOpts)
  //       const json = await request.json()
  //       setUserData(...json)
  //       // console.log(json)
  //       // json?setIsLoading(false):setIsLoading(true)
  //     };
  //     req();
  //   }
  // }, [])
  // useEffect(()=>{
  //   console.log(userData.appointment)
  //   console.log(userData)

  // })
  const navigate = useNavigate();
  const { setIsBottomNav, setIsDisplay, isUserIcon, setIsUserIcon } = useContext(UserContext)
  return (
    <div className='book-div'>
      <nav className="book-nav">
        <header>Book an Appointment</header>
        <img onClick={() => setIsUserIcon(prev => !prev)} src={userN} alt="" />
        {isUserIcon && localStorage.getItem('evJwtToken') ?
          <div className="more-user">
            <NavLink to="/"
              onClick={() => {
                localStorage.removeItem('name');
                localStorage.removeItem('evJwtToken');
                setIsDisplay(true)
                // setUserData({
                //     user: '',
                //     transactions: [],
                // })
              }}>Sign Out</NavLink>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#000" viewBox="0 0 512 512">
              <path d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
            </svg>
          </div> : ''}
      </nav>
      <div className="online-book">
        <h3>Online Book Schedule A Service Appointment</h3>
        <p >There is an $80.00 diagnostic fee that must be paid
          at the time of drop off.
          San Diego tax of 7.75% is not included but equates to 86.20.
          This fee also goes towards the total cost of service.
          If it exceeds that cost, we will notify you of anything
          additional so you will have the opportunity to decide if
          you want to proceed or decline the service(s) recommended</p>
        <button onClick={() => navigate('/pay')}>Continue</button>
      </div>
    </div>
  )
}

export default Bookings
