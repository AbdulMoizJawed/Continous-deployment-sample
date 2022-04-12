import React,{useContext} from 'react'
import CounterContext from './CounterContext'

const Child = () => {
    const counter = useContext(CounterContext)
    
  return (
    <div>
        <h1>Counter Counter Counter {counter[0]}</h1>
        <button onClick={()=>{counter[1](++counter[0])}}>Increment</button>
        <hr />
    </div>
  )
}

export default Child