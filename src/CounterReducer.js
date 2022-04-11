const CounterReducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state+ 1
        case 'decrement':
            return state - 1
            
    
        default:
           return state + 100
    }
  
}
export default CounterReducer