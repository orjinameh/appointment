import React, { useContext, useEffect } from 'react'
import "./index.css"
import { Link, useNavigate } from 'react-router-dom'
import facebook from "../../assets/svgs/facebook.svg"
import twitter from "../../assets/svgs/twitter.svg"
import instagram from "../../assets/svgs/instagram.svg"
import ev from '../../assets/photos/ev.webp'
import { UserContext } from '../../context/Context'

const Home = () => {
  const { setIsBottomNav } = useContext(UserContext)
  useEffect(()=>{
    setIsBottomNav(false)
    localStorage.getItem('evJwtToken')?navigate('/bookings'):''
  },[])
  const navigate = useNavigate();
  const handleClick = () =>{
    localStorage.getItem('evJwtToken')?navigate('/bookings'):navigate('/signin')
  }
  return (
    <div className='home-div'>
      <nav>
            <div className='auths'>
            <Link to="/signup">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                Register</Link >
            <Link to="/signin">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000" viewBox="0 0 512 512"><path d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>
                Login</Link >
            </div>
        </nav>
    <div className="e-pic-div">
        <img src={ev} alt="" />
    </div>
    <div className="lap-flex">
      <div className="ev-pic-div">
          <img src={ev} alt="" />
      </div>
      <div className='home-right'>
        <h1>Online Booking</h1>
        <h5>Book An Appointment Today</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        <div className="book-link">
          <button onClick={handleClick}>Book Now</button>
        </div>
        <div className="social-links">
          <img src={instagram} alt="" />
          <img src={twitter} alt="" />
          <img src={facebook} alt="" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home