// Dependencies
import { createContext, useState, useContext, ReactNode } from 'react';
import { User } from '../../utils/services/types/User';

// Types
type UserContextType = {
  user: User | null
  signUser: (user: User) => void
  editUser: (user: User) => void
  clearUser: () => void
}

type UserProviderProps = {
  children: ReactNode
}

// Context
const UserContext = createContext<UserContextType | null>(null);

// Provider
export const UserProvider = ({children} : UserProviderProps) => {
  // States
  const [user, setUser] = useState<User | null>(null)

  // Methods
  const signUser = (user : User) => setUser(user)
  const editUser = (user : User) => setUser(user)
  const clearUser = () => setUser(null)

  return (
    <UserContext.Provider value={{user, signUser, clearUser, editUser}}>
      {children}
    </UserContext.Provider>   
  )
}

// Hook
export const useUser = () : UserContextType => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('user context required a provider')
  }
  return context
}