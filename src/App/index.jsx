import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ev from "../assets/photos/ev.webp"
import Routess from './routes';
import { UserDataProvider } from '../context/UserContext';
import { UserContext, UserProvider } from '../context/Context';
import Navbar from '../components/navbar';
import "./index.css"
import BottomNav from '../components/bottomNav';

const App = () => {
    const Routed = Routess();
    const {isBottomNav}=useContext(UserContext)
    return (
        <div className="app-div">
            <UserDataProvider>
                    <div className="page-div ">
                        <Router>
                            <Navbar/> 
                            <Routes>
                                {Routed.map((item)=>
                                    <Route key={item.id} path={item.path} id={item.id} element={item.element}/>
                                )}
                            </Routes>
                            {isBottomNav?<BottomNav/>:''}
                        </Router>
                    </div>
            </UserDataProvider>
        </div>
    );
}

export default App;