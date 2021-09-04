import React, { useContext } from 'react'
import './product.css'
import {basketContext} from '../App';
import { Link } from 'react-router-dom';


function Product(props) {
    const basketVal = useContext(basketContext);
    const addToCart = ()=>{
        //the function dispatches an action with the type and item tp be added in the cart
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
    const viewProduct = ()=>{
        basketVal.dispatch({
            type: 'add-to-view-product',
            item: {
                id: props.id,
                imgLink: props.imgLink,
                name: props.name,
                cost: props.cost,
                info: props.info
            }
        })
    }
    return (
        <div className="product">
            <Link exact to= '/product-display' className="product-view-link">
            <img onClick={viewProduct} class="product-image" src={props.imgLink} alt="" />
            </Link>
            <strong className="product-name">{props.name}</strong>
           
            <span className="product-info">{props.info}</span>
            <span className='product-cost'>Rs {props.cost}</span>
           
            <button  onClick={addToCart}className="add-to-cart">Add to Cart</button>
            
        </div>
    )
}

export default Product
