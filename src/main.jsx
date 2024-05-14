import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './styles/index.css'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Races from './pages/Races.jsx'
import Classes from './pages/Classes.jsx'
import Abilities from './pages/Abilities.jsx'
import Stats from './pages/Stats.jsx'
import Equipments from './pages/Equipments.jsx'
import Characters from './pages/Character.jsx'
import Resume from './pages/Resume.jsx'

const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
        children: [
          {
            path: "/races",
            element: <Races/>
          },
          {
            path: '/classes',
            element: <Classes/>
          },
          {
            path: "/abilities",
            element: <Abilities/>
          },
          {
            path: "/stats",
            element: <Stats/>
          },
          {
            path: "/equipments",
            element: <Equipments/>
          },
          {
            path: "/character",
            element: <Characters/>
          },
          {
            path: "/resume",
            element: <Resume/>
          }
        ]
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
