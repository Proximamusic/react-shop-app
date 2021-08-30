import React, { useContext } from 'react';
import { basketContext } from '../App';
import "./checkoutproduct.css";

export default function CheckoutProduct(props) {
    const basketVal = useContext(basketContext);

    const removefromcart = ()=>{
        //the functione dispatches an action with a type and id to look for in array of items in basket
        basketVal.dispatch({
            type: 'remove-from-cart',
            id: props.id
        })
    }
   

    return (
        <div className="checkout-product">
            <img src={props.imgLink} alt="" />
            <div className="checkout-product-info">
                <strong>{props.name}</strong>
                <span>Rs {props.cost}</span>
                <button onClick={removefromcart}className="remove-from-cart">Remove</button>
            </div>
        </div>
    )
}
