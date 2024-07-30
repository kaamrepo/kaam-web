import React from 'react'

const Header = () => {
  return (
    <div>
      <div className='flex justify-between bg-green-600'>
        <h1 className='mx-5'>KaamPe</h1>
        <ul className='flex'>
            <li className='mx-5'>Jobs</li>
            <li className='mx-5'>Employers</li>
            <li className='mx-5'>Profile</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
