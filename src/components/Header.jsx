import React, {useState,useEffect, useContext} from "react";
import "./header.css";
import {Link} from "react-router-dom"
import {basketContext, getBasketTotal } from "../App";
import CheckoutProduct from "./CheckoutProduct";
function Header() {
 
  const [left, setLeft] = useState('-22%'); //using state to pull in the category section from left on mounting
  let {cart} = useContext(basketContext); //importing the cart property
  const [pos, setPos] =useState('none'); //to toggle the cart window on click
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => { //useEffect will toggle or set the left propert when the page mounts and give it a sliding effect
    setLeft('0px');
  },[])

   {/**useEffect mounts and displays the total if the basket changes */}
   useEffect(()=>{
    setSubTotal(getBasketTotal(cart.basket));
 },[cart.basket])

  function handlePos(){ //Changing the display property of the cart window
    if(pos === 'none'){
      setPos('block')
    }else{
      setPos('none');
    }
  
  }
  return (
    <div className="header">
      <div className="header-container">
        <h1 className="brand-name"><Link className="home-link"exact to='/'>Shop-Stop</Link></h1>
        <div className="user-cart">
          <div className="cart">
            <i onClick={handlePos} class="fas fa-2x fa-shopping-cart"></i>
            <span> 
      {cart.basket.length}  {/* Showing the current number of items in the cart */}

            </span>
          </div>
          <div className="user">
            <i class="far fa-2x fa-user"></i>
            <span>Shubham</span>
          </div>
        </div>
      </div>


      <div className="menu" style={{left:left}}>
        <Link activeClassName='selected' class="nav-link" to="/shoes">
          <span>Shoes</span>
        </Link>
        <Link activeClassName='selected' class="nav-link" to="/bags">
          <span>Bags</span>
        </Link>

        <Link  class="nav-link" to="/masks">
          <span>Masks</span>
        </Link>
      </div>
      <div style={{display:pos}}className="checkout-cart">
        <strong>Your shopping cart</strong>
        {/*The function maps through the entire basket and for every product in that array it mounts a CheckoutProduct component */}
        {   
          cart.basket.map((item)=>(
            <CheckoutProduct
            id={item.id}
            name={item.name}
            cost={item.cost}
            imgLink={item.imgLink}
            />
          ))

        }
       <div className="subtotal">
         <strong>Subtotal: Rs {subTotal}</strong>
       </div>
      </div>
    </div>
  );
}

export default Header;
