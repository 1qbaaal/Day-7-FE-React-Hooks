import { useState, useContext, createContext } from "react"

const UserContext = createContext()

export default function UseContextComponent(){

  const [user, setUser] = useState('')

  return(
    <div style={{border: '3px solid black', padding:10}}>
      <UserContext.Provider value={user}>
      <h1>Component1</h1>
      <input type="text" onChange={(e) => setUser(e.target.value)} />
      <Component2 />
      </UserContext.Provider>
    </div>
  )
}

function Component2(){

  const user = useContext(UserContext)

  return(
    <div style={{border: '2px solid red', padding:10}}>
      <h3> Component 2</h3>
      <div>{user}</div>
      <Component3 />
    </div>
  )
}

function Component3(){

  const user = useContext(UserContext)

  return(
    <div style={{border: '1px solid purple', padding:10}}>
      <h3> Component 3 </h3>
      <div>{user}</div>
    </div>
  )
}