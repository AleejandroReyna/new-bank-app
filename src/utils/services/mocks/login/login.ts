// Dependencies
import { User } from "../../types/User"

type LoginResponse = {
  user: User
}

export const MockLogin = ( username: string, password: string) : Promise<LoginResponse> => {
  return new Promise((resolve, reject) => {
    if(username === "alejandro" && password === "Abc123!#") {
      setTimeout(() => 
        resolve(
          {user: {name: 'Alejandro', 
                  lastName: 'Reyna', 
                  phone: '53535353', 
                  email: 'me@alejandroreyna.com', 
                  address: 'Guatemala City'}}), 2000)
    } else {
      setTimeout(() => reject(new Error('Invalid User')), 2000)
    }
  })
}