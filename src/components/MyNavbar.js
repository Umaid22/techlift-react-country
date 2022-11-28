import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom';

const MyNavbar = () => {

  return (
    <div className='bg-dark text-light'>
      <ul className='p-2'>
        <Link to='/' className='text-white'>Home Page</Link>
      </ul>       
    </div>
  )
}

export default MyNavbar