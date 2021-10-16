import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div className='h-16 bg-primary flex items-center justify-between '>              
              <Link
                to='/'
                className='mx-auto lg:mx-0'
              >
                  <p className='font-bold font-serif text-white text-3xl mx-auto lg:ml-4 '>Planner</p>
              </Link>              
              <Link className='hidden lg:block px-16 py-2 bg-secondary text-white text-lg rounded-lg mr-4 transition duration-500 hover:scale-110 hover:text-secondary hover:bg-white hover:border-2 hover:border-secondary'
                to='login'
              >Login</Link>
          </div>
    )
}
