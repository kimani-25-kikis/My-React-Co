import React, {useState} from "react";

function Counter(){

    const [count, setCount] = useState(0);

    const incrementCount = () =>{
        setCount(c=>c + 1);
        setCount(c=>c + 1);
        setCount(c=>c + 1);
    }
    const decrementCount = () =>{
        setCount(c=>c-1);
        setCount(c=>c-1);
        setCount(c=>c-1);
    }
    const reset = () =>{
        setCount(0);
    }

    return(
    <div className="counter-container">
        
        <p className="count-display">{count} </p>

        <button className="counter-button" onClick={incrementCount}>Click here to increment</button>

        <button className="counter-button" onClick={decrementCount}>Click here to decrement</button>

        <button className="counter-button" onClick={reset}>Click here to reset</button>

    </div>);
}
export default Counter