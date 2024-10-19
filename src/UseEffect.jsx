
import React, {useState ,useEffect} from "react";

function Component(){

    const[count, setCount] =useState(0);
    const[color, setColor] =useState("");

    useEffect(()=>{
        document.title =`count ${count} ${color}`
    }, [count,color]);

    function addCount(){

        setCount(c=> c+1);
    }
    function subCount(){
        setCount(c=>c-1);
    }
    function changeColor(){
        setColor(c=> c === "red" ? "green":"red");
    }
    
    return(
    <div>
        <p style={{color: color}}>Count:{count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subCount}>Substract</button><br />
        <button onClick={changeColor}> Change Color</button>
    </div>
    );
}
export default Component;