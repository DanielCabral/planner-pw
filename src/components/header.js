import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='h-16 bg-primary flex items-center justify-between '>
      <Link
        to='/'
        className='mx-auto lg:mx-0'
      >
        <p className='font-bold font-serif text-white text-3xl mx-auto lg:ml-4 '>Planner</p>
      </Link>

      <Link to='login'><div className='btn-secondary w-48'>Login</div></Link>
    </div>
  )
}
