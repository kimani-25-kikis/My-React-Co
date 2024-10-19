
import React,{useState} from "react";

function Car(){

    const [car, setCar] = useState({year:2024,
                                    model:"Ford",
                                    make:"mustang"});

     function handleYear(event){
        setCar(c =>({...c, year: event.target.value}));
    } 
    
     function handleModel(event){
        setCar(c=>({...c, model: event.target.value}));
     }

     function handleMake(event){
        setCar(c=>({...c, make: event.target.value}));
     }
    return(
    <div>
        <p>Your car is {car.year} {car.model} {car.make}</p>

        <input type="number" value={car.year} onChange={handleYear} /><br />
        <input type="text" value={car.model} onChange={handleModel} /><br />
        <input type="text" value={car.make} onChange={handleMake} /><br />
    </div>);
}
export default Car

