import { createContext, useReducer } from 'react'
import users from '../data/users'

import { DELETE_USER } from '../utils/constants'

const initialState = { users }
const UsersContext = createContext({})

export const UsersProvider = props => {

  function reducer(state, action) {
    console.log(action)
    switch (action.type) {
      case DELETE_USER:
        return state
    }
  }  

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <UsersContext.Provider value={{ state, dispatch }}>
      {props.children}
    </UsersContext.Provider>
  )
}

export default UsersContext 

