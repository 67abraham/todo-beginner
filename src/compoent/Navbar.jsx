import React, {  useState } from 'react'

export const Navbar = () => {
    const [user]  =useState(()=>{
        try{
            const getUserEmail  = JSON.parse(sessionStorage.getItem("user"))
            return getUserEmail.email

        }catch{
            return ""
        }
    })
   
  return (
    <nav className='bg-linear-to-r from-blue-600 to-blue-800 shadow-lg'>
        <div className='max-w-7xl mx-auto px-4 py-4 flex items-center justify-between'>
            <div className='text'>
                <h1 className='text-2xl font-bold text-white tracking-wide'>Todo App</h1>
            </div>

            <div className='userIcon'>
                <h2 className='text-white font-medium hover:text-blue-200 transition-colors duration-200 cursor-pointer'>{user}</h2>
            </div>
        </div>
    </nav>
  )
}
