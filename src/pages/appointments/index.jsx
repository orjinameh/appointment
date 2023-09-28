import React, { useContext, useEffect } from 'react'
import './index.css'
import Comp from './__comp'
import { UserContext } from '../../context/Context'
import { UserDataContext } from '../../context/UserContext'

const Appointment = () => {
    const { backendBaseUrl } = useContext(UserContext)
    const { setUserData, userData } = useContext(UserDataContext)
    useEffect(() => {
      if (localStorage.getItem('evJwtToken')) {
        const req = async () => {
          // setIsLoading(true);
          const reqOpts = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
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
    useEffect(()=>{
    //   console.log(userData)
      console.log(userData)
  
    })
    return (
        <div className='appointment'>
            <header>Your Appointments</header>
            <div className='appointment-div'>
                {userData.map((userData)=>(        
                    <div key={userData._id} className="appointment-caro">
                        <div className="appointment-item">
                            <header>Service appointment</header>
                            <Comp svg='DATE:' title={userData.date}/>
                            <Comp svg='TIME:' title='12AM'/>
                            <Comp svg='LOCATION:' title='d'/>
                            <Comp svg='PHONE:' title='+1(203)-232-3456'/>
                            <button>RESCHEDULE</button>
                        </div>
                    </div>
                    )
            )}
            </div>
        </div>
    )
}

export default Appointment