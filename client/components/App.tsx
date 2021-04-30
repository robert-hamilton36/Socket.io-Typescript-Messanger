import React, { useState } from 'react'
import AskName from './AskName'
import Room from './room/Room'
import { UserContext } from './useUserContext'

const App: React.FC = () => {
  const [userObj, setUser] = useState({
    name: '',
    uid: ''
  })
  const [name, setName] = useState('')

  return (
    <UserContext.Provider value={{ userObj, setUser }}>
      {name
        ? <Room name={name}/>
        : <AskName setMainName={setName} />
      }
    </ UserContext.Provider>
  )
}

export default App
