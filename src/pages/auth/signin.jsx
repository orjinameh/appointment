import React, { useContext, useEffect, useState } from 'react'
import "./index.css"
import login from "../../assets/svgs/login.svg"
import { useNavigate, Link } from 'react-router-dom'
import { UserDataContext } from '../../context/UserContext'
import { UserContext } from '../../context/Context'
import { ThreeCircles } from 'react-loader-spinner'

export default function Signin() {
  useEffect(() => {
    setIsBottomNav(false)
  })
  const { backendBaseUrl, setIsBottomNav, token, setToken } = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const { setUserData, userData } = useContext(UserDataContext)
  const { email, password } = formData
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const navigate = useNavigate();

  const api = `${backendBaseUrl}/data/auth/login`
  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      }
    };
    const response = await fetch(api, requestOptions)
    const data = await response.json();
    data ? setIsLoading(false) : setIsLoading(true)
    if (response.status === 200) {
      const reqOpts = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${data.token}`,
        }
      }
      const link = `${backendBaseUrl}/data/me/get`
      const resp = await fetch(link, reqOpts)
      const resData = await resp.json();
      console.log(resData)
      setUserData((prevState) => {
        return {
          ...prevState,
          balance: resData.balance
        }
      });
      setToken(data.token)
      localStorage.setItem('evJwtToken', (data.token));
      localStorage.setItem('name', (data.name));
      localStorage.setItem('email', (data.email));
      setUserData(userData)
      console.log(userData)
      navigate('/bookings');
      setIsBottomNav(true);
    }

  };

  useEffect(() => {
    localStorage.removeItem('name')
  }, [])
  return (
    <div className='sign-up-page sign-div'>
    {isLoading ?
      <ThreeCircles
        height="100"
        width="100"
        color=""
        wrapperStyle={{ position: 'fixed' }}
        wrapperClass="spinner-background"
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="#52ab98"
        innerCircleColor="#2b6777"
        middleCircleColor="#52ab98"
      />
      : ''}
      <div className="attent-reg">
        <p>Login and start👍</p>
      </div>
      <form onSubmit={onSubmit}>
        <div className="form-reg">
          <input
            type="text"
            name="email"
            // value={email}
            onChange={onChange}
            placeholder="Enter your email" />
        </div>
        <div className="form-reg">
          <input
            type="password"
            name="password"
            // value={password}
            onChange={onChange}
            placeholder="Enter your password" />
        </div>
        <button>Submit</button>
        <Link className='a' to="/signup">Register</Link>
      </form>
    </div>
  )
}
