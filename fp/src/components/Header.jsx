import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <Link to='/'>Home</Link>
    <input type='text' />
    <Link to='/profile'>Profile</Link>
    <Link to='/settings'>Settings</Link>
    </>
  )
}

export default Header