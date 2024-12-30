import React from 'react'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div className='allHW'>
      <Outlet></Outlet>
    </div>
  )
}

export default Main
