import { createContext } from 'react'

interface User{
  name: string,
  uid: number
}

export const UserContext = createContext<User | null>(null)
// export const UserContext = createContext({ name: '', uid: 0 })
