import React, { useEffect, useState } from 'react';
import Cart from './Cart/Cart';
import Product from '../../Product/Product';
// import Images from '../../Images/Images';

import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res=> res.json())
        .then(data => setProducts(data))

    },[]);
    return (
      <div className='shop-container'>
      <div className="products-container">
         {
            products.map(product=><Product
               key={product.id}
               product={product}
               ></Product>)
          }
          </div>

          <div className="cart-container">
          <div className='images-container'>
            <img className='images' src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFy
            Y2h8MTF8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
 
          <div className='list-class'>
          <h4>Reheana huque</h4>
            <p>Newdille,India</p>
          </div>
          </div>
            <div className='about'>
           <div className='weight'> 
            <p>weight </p>
           <p>34</p>
           </div> 
            <div className='height'>
                <p>height</p>
            <p>24</p>
            </div>
            <div className='age'>
                <p>Age</p>
            <p> 23</p>
            </div>
            </div>
            <div className='break'>
           <h2> Add A Break</h2>
           <div className='break-container'>
         <a className='break-time' href ="#/">10</a>
         <a className='break-time' href="#/">20</a>
         <a className='break-time'href="#/">30</a>
         <a className='break-time' href="#/">40</a>
        </div>
         </div>
         </div>
         
       
    </div>
        
    );
};

export default Shop;