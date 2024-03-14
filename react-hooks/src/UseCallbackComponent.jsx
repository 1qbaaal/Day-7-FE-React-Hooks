import { useCallback, useState } from "react"
import { useSearchParams } from "react-router-dom"
import Todos from "./Todos"

export default function UseCallbackComponent(){

  const [counter, setCounter] = useState(0)
  const [todos, setTodos] = useState([])

  const handleIncrement = () => {
    setCounter(counter + 1)
  }

  const addTodos = useCallback(() => {
    setTodos((t) => [...t, 'New Todo'])
  }, [todos]) 

  return(
    <div>
      <Todos todos={todos} addTodos={addTodos}/>
      <hr></hr>
      <div>
        <div>
        Counter : {counter}
        </div>
        <button onClick={handleIncrement}> Increment </button>
      </div>
    </div>
  )
}