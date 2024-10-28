import { User } from "../../types/User"

export const authenticate = (user : User) : Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.setItem('fake-token', JSON.stringify(user))
      resolve()
    }, 1000)
  })
}