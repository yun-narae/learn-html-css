import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <main className='p-2'>
            <h1 className='text-4xl font-bold mb-2'>PocketBase</h1>
            <Outlet />
        </main>
    </>
  )
}

export default Layout