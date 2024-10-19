import { useState } from "react";

function Array(){

    const [food, setFood] = useState(["pineapple",'Oranges','Melon','Mangoes']);

    function handleFoodInserting(){ 
        
        const newFood = document.getElementById('getFruits').value;
        document.getElementById('getFruits').value ='';
        setFood(f=>[...f, newFood]);
    }
    function handleFoodDeletion(index){
        setFood(food.filter((_,i)=> i!==index));
    }
   
   

    return(
    
    <div>
        <h2>List of fruits</h2>
        <ul>
            {food.map((food, index )=> <li key={index} onClick={()=>handleFoodDeletion(index)}>{food}</li>)}
        </ul>
        <input type="text" id="getFruits" placeholder="Enter to Add Food" />
        <button onClick={handleFoodInserting}>Add Food</button>
    </div>);
}
export default Array