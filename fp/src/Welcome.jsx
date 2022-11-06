import React from 'react'

const Welcome = () => {
  return (
    <div>
    <h1>Welcome!</h1>
    <form action="">
        <label htmlFor="email">Email:</label>
        <input type="email" id='email'/>
        <label htmlFor="password">Password:</label>
        <input type="password" id='password' />            
    </form>
</div>
  )
}

export default Welcome