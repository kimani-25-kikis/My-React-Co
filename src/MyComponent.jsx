import React, {useState} from "react";

function nameChange(){
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState('');
    const [shipping, setShipping] = useState();

    function handleName(event){
        setName(event.target.value);
    }
    function handleQuantity(event){
        setQuantity(event.target.value);
    }
    function handleCommnet(event){
        setComment(event.target.value);
    }
    function handlePayment(event){
        setPayment(event.target.value);
    }
    function handleShipping(event){
        setShipping(event.target.value);
    }
    return(
    <div>
        <input type="text" value={name} onChange={handleName} /> 
        <p>Name : {name}</p>  
        <input type="number" value={quantity} onChange={handleQuantity} />
        <p>Quantity: {quantity}</p> 
        <input type="text" value={comment} placeholder="Enter Delivery  option" onChange={handleCommnet}/>
        <p>Comment: {comment}</p>
        <select value={payment} onChange={handlePayment}>
            <option value="">Select Option</option>
            <option value="Visa">Visa</option>
            <option value="M-pesa">M-pesa</option>
            <option value="MasterCard">MasterCard</option>
            <option value="GiftCard">GiftCard</option>

           
        </select>
        <p>Payment: {payment}</p>

        <label>
            <input type="radio" value="Pick Up" checked ={shipping === 'Pick Up'} onChange={handleShipping}/>
            Pick Up
        </label><br />

        <label>
            <input type="radio" value='Delivery' checked = {shipping === 'Delivery'} onChange={handleShipping}/>
            Delivery
        </label>
        <p>Shipping: {shipping}</p>
        
    </div>);
}
export default nameChange