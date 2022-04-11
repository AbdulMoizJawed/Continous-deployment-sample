import React,{useReducer} from 'react'
import CounterReducer from './CounterReducer'

const Child2 = () => {
    const [state, dispatch] = useReducer(CounterReducer, 0)
   
  return (
    <div>
        <h1>Value from Counter Reducer is {state}</h1>
        <button onClick={()=>{dispatch('increment')}}>Increse</button>
        <button onClick={()=>{dispatch('decrement')}}>decrese</button>
      
    </div>
  )
}

export default Child2