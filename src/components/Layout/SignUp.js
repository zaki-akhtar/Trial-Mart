 

import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { UiActions } from '../../Redux-store/UiSlice';
import Spinner from '../UI/Spinner';
import Card from '../UI/Card';
import classes from './Signup.module.css';

 const SignUp=()=>{

      let dispatch =useDispatch();
      const [isCardshown,setCardshown]=useState(false);
      const [isSpinner,setSpinner]=useState(false);

      const nameref=useRef();
      const emailref=useRef();
      const passwordref=useRef();
 const signUpHandler=(e)=>{
     e.preventDefault();
     setSpinner(true);
     if(nameref.current.value.length===0 || emailref.current.value.length===0 || passwordref.current.value.length===0){
         dispatch(UiActions.uimessage('Enter the valid details'));
         setSpinner(false);
         setCardshown(true);
         return ;
     }
     const submitUser= async()=>{
       const response=await fetch(`${process.env.REACT_APP_BACKEND_URL}/signUp`,{
           method:'POST',
           headers:{'Content-Type': 'application/json'} ,
           body:JSON.stringify({
               name:nameref.current.value,
               email:emailref.current.value,
               password:passwordref.current.value,
           })
       });
       const data=await response.json();
      
       if(!response.ok){
           console.log(response);
       }
       if(data==='0' && response.ok){
        dispatch(UiActions.uimessage('Your Account already Exist in this EmailId'));
        setSpinner(false);
        setCardshown(true);
     }
       else{
        console.log(data);
         dispatch(UiActions.uimessage(data));
         setSpinner(false);
         setCardshown(true);
       }
     }
     submitUser();
     setSpinner(false);
      nameref.current.value="";
      emailref.current.value="";
      passwordref.current.value="";
    
 }

 const cardCloseHandler=()=>{
     setCardshown(false);
 }
     return <div className={classes.signupContainer}>
         <form onSubmit={signUpHandler}>
             <h1>SignUp</h1>
             <input ref={nameref}type='text' placeholder=' Username'/>
             <input ref={emailref}type='email'placeholder=' Email'/>
             <input ref={passwordref}type='password' placeholder=' Password'/>
             <button type='submit'>Submit</button>
             <p>Already User ? <NavLink to='/home/Login'>Login</NavLink></p>
         </form>
         {isCardshown && <Card onClose={cardCloseHandler}/>}
         {isSpinner && <Spinner/>}
     </div>;
 }

export default SignUp;
