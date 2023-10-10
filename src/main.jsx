import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom"

//Pages 
import AboutMePage from './pages/aboutMePage/aboutMe.page.jsx'
import AdminPage from './pages/adminPage/admin.page.jsx'
import BookingPage from './pages/bookingPage/bookingPage.jsx'
import ContactPage from './pages/contactPage/contact.page.jsx'
import Homepage from './pages/homepage/homepage.page.jsx'
import LocationPage from './pages/locationPage/location.page.jsx'
import NotFoundPage from './pages/NotFoundPage/notFound.page.jsx'
import TreatmentsPage from './pages/treatmentsPage/treatments.page.jsx'

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/about",
    element: <AboutMePage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "/booking",
    element: <BookingPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/treatments",
    element: <TreatmentsPage />,
  },  
  {
    path: "/location",
    element: <LocationPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
