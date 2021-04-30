import React, { useState } from 'react'

interface Props{
  setMainName: React.Dispatch<React.SetStateAction<string>>,
}

const AskName: React.FC<Props> = ({ setMainName }) => {
  const [name, setName] = useState('')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>, input: string) => {
    event.preventDefault()
    setMainName(input)
  }

  return (
    <form onSubmit={(event) => handleSubmit(event, name)}>
      <input id='display-name' value={name} placeholder='Display Name' onChange={handleChange}/>
      <input type='submit' value='enter' />
    </form>
  )
}

export default AskName
