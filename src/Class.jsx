
function Class(){
    const names =[{id:1,name:"Joshua",marks:98},
                  {id:2,name:"Kimani",marks:45},
                  {id:3,name:"Ngigi",marks:56},
                  {id:4,name:"Micheal",marks:70},
                  {id:5,name:"Kimani",marks:60}];

    const fil = names.filter(fill => fill.marks <70)

    //names.sort((a, b)=> a.marks-b.marks);
   // names.sort((a, b)=> a.marks.localeCompare(b.marks) );
    //names.sort((a, b)=> a.name.localeCompare(b.name));

    const Score = names.map(name=> <li key ={name.id}>{name.name} : &nbsp; {name.marks}</li>);
    //const Score = fil.map(name => <li key = {name.id}>{name.name}: &nbsp; {name.marks}</li>);

    return(<ul>{Score}</ul>)
}
export default Class