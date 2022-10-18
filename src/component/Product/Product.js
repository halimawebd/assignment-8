import React from 'react';
import './Product.css';

const Product = (props) => {
  // console.log(props.product)
 const {name, img, time, ForAge} = props.product;
  // console.log(Time)
  const {handleAddToList} = props;
    return (
        <div className='product'>
          <img src={img} alt=""></img>
        <div className='product-info'>
        <p className='product-name'>{name}</p>
        <p>Best performance, best outcome.</p>
        
        <p>For Age: 20.25{ForAge}</p>
          <p><small>Time required: {time} m</small></p>

          </div>
          <button onClick={() => handleAddToList(props.product)} className='btn-cart'>
            <p>Add to list</p>
          </button>
        </div>
    );
};

export default Product;