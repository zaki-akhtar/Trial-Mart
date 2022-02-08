import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { UiActions } from "../../Redux-store/UiSlice";
import Card from '../UI/Card';


const CartOrderButton=(props)=>{
    const [isShowCart,setShowCart]=useState(false);
  
    let dispatch=useDispatch();
    console.log(props.CartData.length);

    
    

  const orderHandler=(props)=>{
        let id=props.param.id;
        console.log(id);
        if(id==='null' && props.CartData.length===0){
            dispatch(UiActions.uimessage('first you have to Login or SignUp'));
            setShowCart(true);
           
        }
        else if(id!=null && props.CartData.length===0 ){
            dispatch(UiActions.uimessage('firstly You have to add item in the Cart'));
            setShowCart(true); return ;
        }

        const sendOrder=async()=>{
           const response=await fetch(`${process.env.REACT_APP_BACKEND_URL}/order/${id}`,{
               method:'POST',
               headers: { 'Content-Type': 'application/json' }
           });
           const data= await response.json();
           if(!response.ok){
               console.log('something wrong');
           }
           else{
              dispatch(UiActions.uimessage(data));
              setShowCart(true);
           }
          
        }
       sendOrder();

    }

    const cartCloseHandler=()=>{
        setShowCart(false);
        // window.location.reload();
    }


    return <Fragment>
         <button onClick={()=>orderHandler(props)}>BuyNow</button>
         {isShowCart && <Card onClose={cartCloseHandler}/>}
     </Fragment>
}

export default CartOrderButton;