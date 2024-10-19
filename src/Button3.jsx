

function Button3(){

    //const handleClick = () => console.log('Yoh');
    let count =0;

    const handleClick2 =(name) => {
       
        if(count < 3){
            count ++;
            console.log(`${name} You clicked  ${count} times`);
        }
        else{
            console.log(`${name} stop Clicking`)
        }
        
    };
    
    return(<button onClick={() =>handleClick2('Josh')}> CLick me</button>);
}
export default Button3