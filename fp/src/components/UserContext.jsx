import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

const UserContext = createContext(null);

const UserContextProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  const value = {
    userInfo, 
    setUserInfo, 
    isAuth, 
    setIsAuth
  };

  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  )
}

export default UserContext