import { memo, useEffect } from "react"

// function Todos(props){

  const Todos = ({todos, addTodos}) => {
    console.log('render todos')
    // useEffect(() => {
    //     console.log('re render todos')
    // })



    return(
      <div>
        <h3>Todos</h3>
        <ul>
          {todos?.map((item, index) => {
            return(
              <li key={index}>{item}</li>
            )
          })}
        </ul>
        <button onClick={() => addTodos()}> Add Todos </button>
      </div>
    )
  }


// }

export default memo(Todos)