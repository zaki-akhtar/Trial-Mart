import classes from './Cart.module.css';
// import CartData from '../../CartData';
import CartItem from './CartItem';
import { useEffect, useState } from 'react';
import {  useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import CartOrderButton from './CartOrderButton';

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
         <CartOrderButton param={param} CartData={CartData}/>
     </div>
    </div>
}

export default Cart;