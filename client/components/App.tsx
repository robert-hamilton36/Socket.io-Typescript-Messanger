import React, { useState } from 'react'
import AskName from './AskName'
import Room from './room/Room'
import { UserContext } from './useUserContext'

const App: React.FC = () => {
  const [userObj, setUserObj] = useState({
    name: '',
    uid: 0
  })

  const setName = (name:string) => {
    setUserObj((previousState) => ({
      ...previousState,
      name: name
    }))
  }

  return (
    <UserContext.Provider value={userObj}>
      {userObj.name
        ? <Room />
        : <AskName setMainName={setName} />
      }
    </ UserContext.Provider>
  )
}

export default App
