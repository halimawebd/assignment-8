import React, { useEffect, useState } from 'react';
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
              {/* <h1>Badminton today's play</h1> */}
          {/* {
           products.map(images=><Images></Images>)
          } */}
         {
            products.map(product=><Product
               key={product.id}
               product={product}
               ></Product>)
          }
          </div>
          <div className="cart-container">
            <img className='images' src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFy
            Y2h8MTF8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
           <div className='images-container'>
           <h4>Reheana huque</h4>
            <h5>Newdille,India</h5>
            <i class="fa-sharp fa-solid fa-location-dot"></i>
           </div>
           </div> 
    </div>
        
    );
};

export default Shop;