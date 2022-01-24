import classes from './Cart.module.css';
// import CartData from '../../CartData';
import CartItem from './CartItem';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartState } from '../../Redux-store/CartSlice';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const Cart=()=>{
   
    const[totalprice,setPrice]=useState(0);

    let param=useParams();
    console.log(param);
    
    let CartData=useSelector(state=>state.Cart.data);
    console.log(CartData);
    
    
    useEffect(()=>{
    const sum=CartData.reduce((total,obj)=>{
        return total+(obj.price*obj.quantity);
    },0);
    setPrice(sum);

    },[CartData]);


    return<div className={classes.Cart}>
       <div className={classes.Cart_section1}>
         {CartData.map((obj)=><CartItem Item={obj} param={param}/>)}
       </div>
      <div className={classes.Cart_section2}>
         <h2>Total Price</h2>
         <h4>Rs  {totalprice}</h4>
         <button>BuyNow</button>
     </div>
    </div>
}

export default Cart;