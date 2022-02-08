import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { getCartState } from '../../Redux-store/CartSlice';


const CartItem=(props)=>{

    let dispatch=useDispatch();
   

    console.log(props.param);
    const incrementQuantityHandler=async(e,e1)=>{
        console.log(e1);
        const response=await fetch(`${process.env.REACT_APP_BACKEND_URL}/cart/increment/${e1.id}`,{
         method:'POST',
         headers: { 'Content-Type': 'application/json' },
         body:JSON.stringify(e),
      })
      if(!response.ok){
         console.log(response);
      }
        
        console.log(e1.id);
        dispatch(getCartState(e1.id));  
        // Router.refresh();
    }
    const decrementQuantityHandler=async(e,e1)=>{
        console.log(e1);
        const response=await fetch(`${process.env.REACT_APP_BACKEND_URL}/cart/decrement/${e1.id}`,{
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify(e),
         });
        if(!response.ok){
            console.log(response);
        }
       
        console.log(e1.id);
        dispatch(getCartState(e1.id)); 
        // Router.refresh();
    }
    return<div className={classes.Cart_section1_child} key={props.Item._id}>
    <div className={classes.Cart_section1_child1}>
        <div className={classes.div1}>
          <img src={props.Item.url} alt=''/>
        </div>
        <div className={classes.div2}>
           <h1>{props.Item.name}</h1>
           <h3>{props.Item.quality}</h3>
           <p>Qty {props.Item.quantity}</p>
           <button onClick={()=>decrementQuantityHandler(props.Item,props.param)}>-</button>
           <button onClick={()=>incrementQuantityHandler(props.Item,props.param)}>+</button>
        </div>
    </div>
    <div className={classes.Cart_section1_child2}>
        <h3>price</h3>
        <h5>Rs {props.Item.price}</h5>
    </div>
</div> ;
}

export default CartItem;