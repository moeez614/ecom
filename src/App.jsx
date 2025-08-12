import { useState } from 'react'
import { createBrowserRouter, RouterProvider ,Outlet} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Suites from './components/Suites'
import Dining from './components/Dining'
import Amenities from './components/Amenities'
import Booknow from './components/Booknow'
import Frame from './components/Frame'
import Lounge from './components/Lounge'
import Spa from './components/Spa'
import Fitness from './components/Fitness'
import Footer from './components/Footer'
import Layout from './Layout'
import Pool from './components/Pool'
import Profile from './components/Profile'
import Select from './components/Select'
import './App.css'
// import Scrolltop from './Scrolltop'

function App() {
  const Routez = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Frame />
        },
        {
          path: 'spa',
          element: <Spa />
        },
        {
          path: '/lounge',
          element: <Lounge />
        },
        {
          path:'/fitness',
          element:<Fitness />
        },
        {
          path:'/pool',
          element:<Pool />
        }
      ]
    },
    {
      path: '/home',
      element: <><Nav /><Home /><Footer /></>
    },
    {
      path: '/suites',
      element: <><Nav /><Suites /><Footer /></>
    },
    {
      path: '/dining',
      element: <><Nav /><Dining /></>
    },
    {
      path: '/amenities',
      element: <><Nav /><Amenities /></>
    },
    {
      path: '/booknow',
      element: <><Nav /><Outlet /></>,
      children:[
        {
          index:true,
          element:<Booknow />
        },
        {
          path:"/booknow/select",
          element:<Select />
        }
      ]
    },
    {
      path: '/profile',
      element: <><Nav /><Profile /></>
    }
  ])

  return (
    <>
      {/* <Scrolltop /> */}
      <RouterProvider router={Routez} />
    </>
  )
}

export default App
