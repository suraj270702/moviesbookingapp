import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home/Home.jsx'
import SingleShowPage from './components/singlepage/SingleShowPage.jsx'
import { YourContextProvider } from './ApplicationContext.jsx'
import Booking from './components/booking/Booking.jsx'
import Success from './components/success/Success.jsx'
import Profile from './components/profile/Profile.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    
  },
  {
    path:"/single/:id",
    element:<SingleShowPage />
  },
  {
    path:"/booking",
    element:<Booking />
  },
  {
    path:"/success",
    element:<Success />
  },
  {
    path:"/profile",
    element:<Profile />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <YourContextProvider>
    <RouterProvider router={router} />
    </YourContextProvider>
  </React.StrictMode>,
)
