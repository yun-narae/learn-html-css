import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <Header />
        <div className='p-2'>
            <h1 className='text-4xl font-bold mb-2'>PocketBase</h1>
            <Outlet />
        </div>
    </>
  )
}

export default Layout