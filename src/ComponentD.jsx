
import React, {useContext} from "react";

import {useContext} from "./ComponentA.jsx";

function ComponentD(){

    const user = useContext(UserContext);
    return(
        <div className="box">

            <h1>Kimani Ngigi</h1>

            <h2>{`Bye ${user}`}</h2>
        </div>
        );
}

export default ComponentD;