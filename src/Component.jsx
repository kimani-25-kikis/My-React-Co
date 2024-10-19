import React, {useState} from "react";

function Component(){

    const [name, setName] = useState("Guest");
    const [age, setAge] =useState(0);
    const [isEmployed, setIsEmplyed] = useState(false);

    const updateName = () =>{
        setName('Kimani')
    }
    const incrementAge = () => {
        setAge(age +1);
    }
    const toggleStatus = () =>{
        setIsEmplyed(!isEmployed);
    }

    return(
    <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <button onClick={updateName}>Set Name</button>
        <button onClick={incrementAge}>Increase Age</button>
        <p>Is Employed: {isEmployed ? 'Yes' : 'No'}</p>
        <button onClick={toggleStatus}>ToggleStatus</button>
    </div>);
}
export default Component