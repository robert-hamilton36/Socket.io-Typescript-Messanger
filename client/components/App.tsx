import React from 'react'
import { Nav } from './nav/Nav'
import { MessageContainer } from './messages/MessageContainer'

const App: React.FC = () => {
  return (
    <div className='container'>
      <Nav />
      <MessageContainer />
    </div>
  )
}

export default App
