import { createContext, useReducer } from 'react'
import users from '../data/users'

import { DELETE_USER } from '../utils/constants'

const initialState = { users }
const UsersContext = createContext({})

const actions = {
  DELETE_USER(state, action) {
    const user = action.payload
    return { 
      // ...state, IF HAVE OTHERS ELEMENTS IN STATE, YOU NEED USE SPREAD
      users: state.users.filter(user_ => user_.id !== user.id)
    }
  }
}

export const UsersProvider = props => {

  function reducer(state, action) {
    const fn = actions[action.type]
    return fn ? fn(state, action) : state
  }  

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <UsersContext.Provider value={{ state, dispatch }}>
      {props.children}
    </UsersContext.Provider>
  )
}

export default UsersContext 

