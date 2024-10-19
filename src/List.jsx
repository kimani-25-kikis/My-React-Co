import PropTypes from 'prop-types';

function List(props){
   
    const category = props.category;
    const itemList =props.items;

   //fruits.sort((a, b)=> a.name.localeCompare(b.name));
   //fruits.sort((a, b)=> b.name.localeCompare(a.name));
   //fruits.sort((a, b)=> a.calories - b.calories);
   //const lowCar= itemList.filter(fruit=>fruit.calories<100)
 
   //const listItems = fruits.map(fruits => <li key ={fruits.id}>{fruits.name} : &nbsp; {fruits.calories}</li>);
   const listItems = itemList.map(item => <li key ={item.id}>{item.name} : &nbsp; {item.calories}</li>);


   return(
   <>
   <h3 className ='list-category'>{category}</h3>
   <ol className ='list-items'>{listItems}</ol>
   </>
);
}List.prototype={
    category: PropTypes.string,
    item: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number,
    }))
}
List.defaultProps ={
    category:'Category',
    item: []
}

export default List

