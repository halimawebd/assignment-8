import React, { useEffect, useState } from 'react';
import Cart from './Cart/Cart';
import Product from '../../Product/Product';
// import Images from '../../Images/Images';
import './Shop.css';
import { toast } from 'react-toastify';

const Shop = (props) => {
  console.log(props)
    const [products, setProducts] = useState([]);
    const [list,setList] = useState(0);
    const [breakTime, setBreakTime] =  useState(0);
    let time = 0
    for (const list in props){
      console.log(list)
      time = time + list.time
    }
    useEffect(() => {
    fetch('data.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
  },[]);
  const handleAddToList = (product) => {
  console.log(product);
    // list.push(product);
   const newTime = list + product.time
   setList(newTime)
  }
   const handleBreak = (time) =>{
    setBreakTime(time)
}

useEffect(() =>{
  localStorage.setItem('time',JSON.stringify(breakTime))
  },[breakTime]);

  const handleBreakTime = (second) =>{
    setBreakTime(second)
  }

    return (
      <div className='shop-container'>
      <div className="products-container">
         {
            products.map(product=><Product
               key={product.id}
               product={product}
               handleAddToList={handleAddToList}
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
           <p>48kg</p>
           </div> 
            <div className='height'>
                <p>height</p>
            <p>5.7</p>
            </div>
            <div className='age'>
                <p>Age</p>
            <p> 23yers</p>
            </div>
            </div>
            <div className='break'>
           <h2> Add A Break</h2>
           <div className='break-container'>
         <button className='break-time' onClick={()=>handleBreak(10)}>10s</button>
         <button className='break-time' onClick={()=>handleBreak(20)} >20s</button>
         <button className='break-time' onClick={()=>handleBreak(30)}>30s</button>
         <button className='break-time' onClick={()=>handleBreak(40)}>40s</button>
        </div>
         </div>
         <div className='details'>
          <h3>ExerCise Details</h3>
          <div className='exercise-time'>
            <h5 >ExerCise Time:{list}</h5>
          </div>
          <div className='Break-text'>
            <h5>Break Time:{breakTime}</h5>
          </div>
        </div>
       <button onClick={() => toast("Wow your activity is completed !")} className='activity'>
          <h3 style={{color:"white"}}>Activity Completed</h3>
          </button>
          {/* <button onClick={() => toast("Wow your activity is completed !")} cl>
            <h1>Hello</h1>
          </button> */}
       </div>
        </div>
        );
      };

export default Shop;