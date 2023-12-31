import React, { useContext, useEffect, useState } from 'react'
import "./index.css"
import user from "../../assets/svgs/user.svg"
import { UserDataContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { ThreeCircles } from "react-loader-spinner";
import { UserContext } from '../../context/Context'

export default function Signup() {
  const { userData, setUserData } = useContext(UserDataContext)
  const { setIsBottomNav } = useContext(UserContext)
  useEffect(()=>{
    setIsBottomNav(false)
  })
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {backendBaseUrl} =  useContext(UserContext)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const { name, email, password, confirmPassword } = formData
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({ name: name, email: email, password: password }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const response = await fetch(`${backendBaseUrl}/data/auth/signup`, requestOptions)
    const data = await response.json();
    console.log(data);
    const requestUserLoginOptions = {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      }
    };
    const Log = await fetch(`${backendBaseUrl}/data/auth/login`, requestUserLoginOptions)
    const log = await Log.json();
    if (response.status === 200) {
      //get details
      const requestOpts = {
        method: "GET",
        headers:{
          'Content-Type': 'application/json',
          'Authorizaion': `Bearer ${log.token}`
        }
      }
      const link = `${backendBaseUrl}/data/me/get`
      const resp = await fetch(link, requestOpts)
      const resData = await resp.json();
      console.log(resData)
      // Save jwt token to localStorage
      setUserData((prevState) => ({
        ...prevState,
        name: resData.name,
        email: resData.email,
      }));
      localStorage.setItem('evJwtToken', (log.token));
      localStorage.setItem('name', (log.name));
      setIsLoading(false)
      setUserData(userData)
      navigate('/');
      window.location.reload();
    }

    // const requestUserOptions = {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     user: userData.user,
    //     email: userData.email,
    //     transactions: userData.transactions,
    //     notifications: userData.notifications,
    //     balance: userData.balance,
    //     plan: userData.plan,
    //     refs: userData.refs,
    //     totalFunding: userData.totalFunding,
    //     totalSpent: userData.totalSpent,
    //   }),
    //   headers: {
    //     'Authorization': `Bearer ${log.token}`,
    //     'Content-Type': 'application/json',
    //   }
    // };
    // const createUserData = await fetch(`${backendBaseUrl}/data/me/post`, requestUserOptions)
    // const UserDatas = await createUserData.json();
    // UserDatas ? setIsLoading(false) : setIsLoading(true)
    // console.log(UserDatas)
  };
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
        <p>Create account</p>
      </div>
      <form onSubmit={onSubmit}>
        <div className="form-reg">
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            placeholder="Enter your username" />
        </div>
        <div className="form-reg">
          <input
            type="text"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Enter your email" />
        </div>
        <div className="form-reg">
          <input
            type="text"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Enter your password" />
        </div>
        <div className="form-reg">
          <input
            type="text"
            name="confirmPassword"
            value={confirmPassword}
            onChange={onChange}
            placeholder="Confirm your password" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}
