
import classes from './Slider.module.css';
import DataSlider from './DataSlider';
import { useState } from 'react';

const Slider=()=>{
   
    const[ShowSlide,setShowSlide]=useState(0);

    const CrouselSlideHandler=(e)=>{
       if(e.target.name==='right'){
           setShowSlide(prev=>{
               if(prev===DataSlider.length-1){
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
               return DataSlider.length-1;
            }
            else{
                return prev-1;
            }
        });
       }
      
    }


   
    return<div className={classes.Slider_container}>
          <div className={classes.slider_section1}>
            {DataSlider.map((obj,index)=>{
                return(
                    <div className={index===ShowSlide?classes.anim:classes.slide}>
                        <img src={process.env.PUBLIC_URL + `/Imgs/sliderImages${index + 1}.jpg`} alt=''/>
                    </div>
                )
            })}
            
            <button onClick={CrouselSlideHandler} name='left' className={classes.left}> <i class="fas fa-chevron-left fa-2x"></i></button>
            <button onClick={CrouselSlideHandler} name='right'className={classes.right}><i class="fas fa-chevron-right fa-2x"></i></button>
          </div>
          <div className={classes.slider_section2}>
            <div className={classes.slider_section2_section1}>
              <h2>Tshirt</h2>
              <p>cotton </p>
              <p>Rs 399</p>
              <button className={classes.orderButton}>BuyNow</button>
              <button className={classes.addFavButton}>Add to favourites</button>
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
    </div> ;
}

export default Slider;