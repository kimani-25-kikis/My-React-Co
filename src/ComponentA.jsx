
import React, {useState, createContext} from "react";

import ComponentB from "./ComponentB.jsx";

export const userContext = createContext();

function ComponentA(){
    const [user, setUser] = useState("Josh");

    return(
        <div className="box">
            <h1>Kimani Ngigi</h1>
            <h2>{`Hello ${user}`}</h2>

            <userContext.Provider value ={user}>
                <ComponentB user={user}/>
            </userContext.Provider >
            
        </div>
        );
}

export default ComponentA;