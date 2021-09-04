import React, { useContext, useEffect } from 'react'
import './productview.css'
import { basketContext } from '../App'




function ProductView() {
const viewProd = useContext(basketContext)
const viewProdbasket = viewProd.cart.viewProduct
const moveToCart = ()=>{
    //the function dispatches an action with the type and item tp be added in the cart
    viewProd.dispatch({
        type: 'add-to-cart',
        item: {
            id: viewProdbasket[0].id,
            imgLink: viewProdbasket[0].imgLink,
            name: viewProdbasket[0].name,
            cost: viewProdbasket[0].cost
        }
    })
}

useEffect(() => {
    {alert('add to cart button on this page is still being worked on, currently it ends up in an error:(')}
}, [])

    return (
        <div className='product-view'>
            <h1 className="product-view-page-heading">This is what {viewProdbasket[0].name} brings to you</h1>
            <div className="product-view-container">
            <div className="product-view-images">
            <img src={viewProdbasket[0].imgLink} alt="" />
            </div>
            <div className="product-view-info">
             <h1 className="product-name">
                 {viewProdbasket[0].name}
             </h1>
             <span className="product-info">{viewProdbasket[0].info}</span>
             <span className="product-cost">Rs {viewProdbasket[0].cost}</span>
             <button onClick={moveToCart} className="add-to-basket">
                 Add To Basket
             </button>
            </div>
            </div>
        </div>
    )
}

export default ProductView;
