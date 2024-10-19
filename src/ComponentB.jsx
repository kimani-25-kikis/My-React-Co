import ComponentC from "./ComponentC.jsx";
function ComponentB(props){
    return(
        <div className="box">
            <h1>Kimani Ngigi</h1>
            <ComponentC user ={props.user}/>
        </div>
        );
}

export default ComponentB;