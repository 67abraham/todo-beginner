import React from 'react'
import { Login } from './Login'
import { Navbar } from '../compoent/Navbar'

export const Index = () => {


  return (
    <div>
        <Navbar/>

        <div className='todoText'>
            <div>
                <h1 style={{
                  fontSize: 40,
                  fontWeight: 'bolder',
                  margin: 30,
                  textAlign: 'center'
                }}>Welcome To Planning <span className=' text-blue-600 to-blue-800 shadow-lg'>Paradise</span></h1>
                <h3>Marking the Future, by Planning the Future</h3>
            </div>

            <Login/>


        </div>
    </div>
  )
}
