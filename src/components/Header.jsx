import React, {useState,useEffect, useContext} from "react";
import "./header.css";
import {Link} from "react-router-dom"
import {basketContext} from "../App";
import CheckoutProduct from "./CheckoutProduct";
function Header() {
 
  const [left, setLeft] = useState('-22%');
  const basketVal = useContext(basketContext);
  const [pos, setPos] =useState('none');

  useEffect(() => {
    setLeft('0px');
  },[])

  function handlePos(){
    if(pos == 'none'){
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
            <span>{basketVal.cart.basket.length}</span>
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
        { 
          basketVal.cart.basket.map((item)=>(
            <CheckoutProduct
            id={item.id}
            name={item.name}
            cost={item.cost}
            imgLink={item.imgLink}
            />
          ))

        }

      </div>
    </div>
  );
}

export default Header;
