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
            <h3>Zahid Hasan</h3>
          </div> 
        </div>
        
    );
};

export default Shop;