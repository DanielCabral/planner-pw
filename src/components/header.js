import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { useHistory } from 'react-router-dom'

export default function Header() {
  const history = useHistory()
  const [path, setPath] = useState('/e');

  useEffect(() => {
    return history.listen((location) => {
      setPath(location.pathname);
    })
  }, [history])
  return (
    <div className='h-16 bg-primary flex items-center justify-between '>
      <Link
        to='/'
        className='mx-auto lg:mx-0'
      >
        <p className='font-bold font-serif text-white text-3xl mx-auto lg:ml-4 '>Planner</p>
      </Link>
      {
        path === '/'
          ? <Link to='login'><div className='btn-secondary w-48'>Login</div></Link>
          : <></>
      }
    </div>
  )
}
