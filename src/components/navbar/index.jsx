import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import "./index.css"
import { UserContext } from '../../context/Context'

function Navbar({}) {
  const {setIsDisplay,isDisplay} = useContext(UserContext)
  return (
    <nav className='laptop nav-iv' >
      {
        localStorage.getItem('evJwtToken')?
        <nav className="nav-div" >
          <div className="nav-nav">
          {/* <NavLink to='/'>Home</NavLink> */}
          <NavLink to='/appointments'>Appointments</NavLink>
          <NavLink to='/bookings'>Bookings</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
          <NavLink to="/"
            onClick={() => {
              localStorage.removeItem('name');
              localStorage.removeItem('evJwtToken');
              setIsDisplay(true)
              // setUserData({
              //     user: '',
              //     email: '',
              //     transactions: [],
              //     notifications: [],
              //     balance: '',
              //     plan: '',
              //     refs: '',
              //     totalFunding: '',
              //     totalSpent: '',
              //     refBonus: ''
              // })
            }}>Sign Out</NavLink>
          </div>
        </nav>:''
      }
    </nav>
  )
}

export default Navbar