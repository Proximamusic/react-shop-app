import React from 'react'
import "./home.css";
import { Link } from 'react-router-dom'

{alert('Now you can click on the product image and view product in its full beauty!')}
export default function Home() {
    return (
        <div className="home">
            
            <div className="home-text">
             <h1 className="home-heading">Welcome To <span>ShopStop</span></h1>
             <p className="home-tagline">Stop looking for it, Shopstop is your one stop for all you want</p>
            <button className="shop-now"><Link to='/shoes' className='shop-now-link'> Shop Now</Link></button>
            </div>
        </div>
    )
}
