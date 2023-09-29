import React from 'react'
import About from '../pages/about'
import Signin from '../pages/auth/signin'
import Signup from '../pages/auth/signup'
import Bookings from '../pages/bookings'
import Contact from '../pages/contact'
import Home from '../pages/home'
import AuthNet from '../pages/auth.net'
import Appointment from '../pages/appointments'
import Book from '../pages/book'
import ReBook from '../pages/reBook'
import Policy from '../pages/policy'

function Routess() {
    return (
        [
            {
                element: <About />,
                id: 1,
                path: '/about'
            },
            {
                element: <Home />,
                id: 2,
                path: '/'
            },
            {
                element: <Bookings />,
                id: 3,
                path: '/bookings'
            },
            {
                element: <Contact />,
                id: 4,
                path: '/contact'
            },
            {
                element: <Signin />,
                id: 5,
                path: '/signin'
            },
            {
                element: <Signup />,
                id: 6,
                path: '/signup'
            },
            {
                element: <AuthNet />,
                id: 7,
                path: '/pay'
            },
            {
                element: <Appointment />,
                id: 8,
                path: '/appointments'
            },
            {
                element: <Book/>,
                id: 9,
                path: '/book'
            },
            {
                element: <ReBook/>,
                id: 9,
                path: '/edit-aptn/:id'
            },
            {
                element: <Policy/>,
                id: 9,
                path: '/policy'
            },
        ]
    )
}

export default Routess