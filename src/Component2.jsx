
import React, {useState,useEffect} from "react";

function Component2(){

    const [width, setWidth] = useState(window.innerWidth);
    const[height, setHeight] = useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener("resize", handeChange);
    }, []);

    function handeChange(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    return(<>
    <p>Width is {width}px</p>
    <p>height is {height}px</p>
    </>);
}
export default Component2;     