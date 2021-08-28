import React, { useContext } from 'react'
import './product.css'
import {basketContext} from '../App';



function Product(props) {
    const basketVal = useContext(basketContext);
    const addToCart = ()=>{
        basketVal.dispatch({
            type: 'add-to-cart',
            item: {
                id: props.id,
                imgLink: props.imgLink,
                name: props.name,
                cost: props.cost,
            }
        })
    }
    return (
        <div className="product">
            <img class="product-image" src={props.imgLink} alt="" />
            <strong className="product-name">{props.name}</strong>
            <span className="product-info">{props.info}</span>
            <span className='product-cost'>Rs {props.cost}</span>
            <button  onClick={addToCart}className="add-to-cart">Add to Cart</button>
            
        </div>
    )
}

export default Product
