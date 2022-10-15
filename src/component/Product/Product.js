import React from 'react';
import './Product.css';

const Product = (props) => {
   const {name, img, Time, ForAge} = props.product;
    return (
        <div className='product'>
          <img src={img} alt=""></img>
        <div className='product-info'>
        <p className='product-name'>{name}</p>
        <p>For Age: {ForAge}</p>
          <p><small>Time: {Time}</small></p>
          </div>
          <button className='btn-cart'>
            <p>Add to list</p>
          </button>
        </div>
    );
};

export default Product;