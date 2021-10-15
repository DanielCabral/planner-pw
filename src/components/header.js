import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div className='h-16 bg-primary flex items-center justify-between'>
              <div>
                  <p className='font-bold text-white ml-4'>Planner</p>
              </div>
              <Link className='px-6 py-2 bg-fourth text-white text-lg rounded-lg mr-4'
                to='login'
              >Login</Link>
          </div>
    )
}
