

function Button4(){
    let count = 0;
    const handleClick= (name) =>{
        if(count<3){
            count++;
            console.log(`${name} You clicked ${count} times`)
        }
        else{
            console.log(`${name} stop clicking`);
        }
        
    }
    return(<button onClick={() => handleClick('Kimani')}>Click Me</button>);
}
export default Button4