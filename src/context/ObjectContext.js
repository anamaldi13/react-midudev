
import React, {useState} from 'react'

const Context = React.createContext({})

export function ObjectContext ({children}) {
  const [tasks, setTasks] = useState([])

  return <Context.Provider value={{tasks, setTasks}}>
    {children}
  </Context.Provider>
}

export default Context