import React,{useState} from 'react';
import './App.css';
import Parent from './Parent';
import CounterContext from './CounterContext';


function App() {
  const countState = useState(0)
  return (
    <CounterContext.Provider value={countState}>
      <Parent />
    </CounterContext.Provider>
  );
}

export default App;
