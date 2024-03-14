import { useEffect, useMemo, useState } from "react";

export default function UseMemoComponent(){
 
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

const isEvenNumber = () => {
  let i = 0;
  while (i < 2000000000) i++;
  return i % 2 === 0
}

const calculation = useMemo(isEvenNumber, [number])

const incrementCounter = () => setCounter(counter+1);
const incrementNumber = () => setNumber(number+1)

useEffect(() => {
  console.log('Number Change')
}, [number])

useEffect(() => {
  console.log('Number Change')
}, [counter])

return(
  <div>
    <div>
      counter : {counter}
    </div>
    <div>
      number : {number}
    </div>
    <div>
      isNumberEven : {calculation}
    </div>
    <button onClick={() => incrementCounter ()}> Counter Increment</button>
    <button onClick={() => incrementNumber()}> Number Increment</button>
  </div>
)
}