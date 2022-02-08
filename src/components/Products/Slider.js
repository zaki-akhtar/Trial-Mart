
import classes from './Slider.module.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch } from 'react-redux';
import { getCartState } from '../../Redux-store/CartSlice';
import Card from '../UI/Card';
import { UiActions } from '../../Redux-store/UiSlice';

const Slider=()=>{
   
    const[ShowSlide,setShowSlide]=useState(0);
    const[isCardshown,setCardshown]=useState(false);
    

    const location=useLocation();
    console.log(location.state.itemsImage);
    let x=location.state.itemsImage.length;
    let dispatch=useDispatch();
    
    const CrouselSlideHandler=(e)=>{
       if(e.target.name==='right'){
           setShowSlide(prev=>{
               if(prev===x-1){
                  return 0;
               }
               else{
                   return prev+1;
               }
           });
       }
       else{
        setShowSlide(prev=>{
            if(prev===0){
               return x-1;
            }
            else{
                return prev-1;
            }
        });
       }
      
    }

    const addTocartHandler=async(e)=>{
         let id=sessionStorage.getItem('id');
         if(id==null){
            dispatch(UiActions.uimessage('Please Login or SignUp first'));
            setCardshown(true);
        }
         console.log(id);
         console.log(e);
        
      try{
       
        const response=await fetch(`${process.env.REACT_APP_BACKEND_URL}/cart/${id}`,{
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify(e),
        });
        const data=await response.json();
        if(!response.ok){
            let message=`An error occured ${response.status}`
            throw new Error (message);
        }
        else{
            console.log(data);
            dispatch(UiActions.uimessage(data));
            setCardshown(true);
        }
        
       }catch(err){
          console.log(err);
       }
    
       dispatch(getCartState({id:id}));    
    }

   const hideCardHandler=()=>{
        setCardshown(false);
      }
   const orderItemHandlr=()=>{
       let id=sessionStorage.getItem('id');
       if(id===null){
           dispatch(UiActions.uimessage('please Login or SignUp first'));
           setCardshown(true);
       }
       else if(id!=null){
            dispatch(UiActions.uimessage('Your Order successful'));
            setCardshown(true);
       }
   }

   
    return<div className={classes.Slider_container}>
          <div className={classes.slider_section1}>
            {location.state.itemsImage.map((obj,index)=>{
                return(
                    <div className={index===ShowSlide?classes.anim:classes.slide} key={obj._id}>
                        <img src={process.env.PUBLIC_URL +`${obj.url}/sliderImages${index+1}.jpg`} alt=''/>
                    </div>
                )
            })}
            
            <button onClick={CrouselSlideHandler} name='left' className={classes.left}> <i class="fas fa-chevron-left fa-2x"></i></button>
            <button onClick={CrouselSlideHandler} name='right'className={classes.right}><i class="fas fa-chevron-right fa-2x"></i></button>
          </div>
          <div className={classes.slider_section2}>
            <div className={classes.slider_section2_section1}>
              <h2>{location.state.name}</h2>
              <p>{location.state.quality} </p>
              <p>Rs {location.state.price}</p>
              <button onClick={orderItemHandlr} className={classes.orderButton}>BuyNow</button>
              <button onClick={()=>addTocartHandler(location.state)} name={location.state} className={classes.addFavButton}>Add to favourites</button>
            </div>
            
            <div className={classes.slider_section2_section2}>
                <div>
                    <h3>Description</h3>
                    <p>lorem ipsum</p>
                    <p>lorem ipsum</p>
                    <p>lorem ipsum</p>
                    <p>lorem ipsum</p>
                    <p>lorem ipsum</p>
                    <h3>Category</h3>
                    <p>cloths</p>
                </div>
                <div>
                    <h3>Seller</h3>
                    <p>lorem ipsum</p>
                    <p>lorem ipsum</p>
                    <p>lorem ipsum</p>
                    <p>lorem ipsum</p>
                    <p>lorem ipsum</p>
                </div>
            </div>
          </div>
          {isCardshown && <Card onClose={hideCardHandler}/>}
    </div> ;
}

export default Slider;