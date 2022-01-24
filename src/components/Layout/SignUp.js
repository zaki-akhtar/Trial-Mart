 

import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Signup.module.css';

 const SignUp=()=>{
      const nameref=useRef();
      const emailref=useRef();
      const passwordref=useRef();
 const signUpHandler=(e)=>{
     e.preventDefault();
     const submitUser= async()=>{
       const response=await fetch('http://localhost:4000/signUp',{
           method:'POST',
           headers:{'Content-Type': 'application/json'} ,
           body:JSON.stringify({
               name:nameref.current.value,
               email:emailref.current.value,
               password:passwordref.current.value,
           })
       });
       if(!response.ok){
           console.log(response);
       }
     }
     submitUser();
      nameref.current.value="";
      emailref.current.value="";
      passwordref.current.value="";
    
 }
     return <div className={classes.signupContainer}>
         <form onSubmit={signUpHandler}>
             <h1>SignUp</h1>
             <input ref={nameref}type='text' placeholder=' Username'/>
             <input ref={emailref}type='email'placeholder=' Email'/>
             <input ref={passwordref}type='password' placeholder=' Password'/>
             <button type='submit'>Submit</button>
             <p>Already User ? <NavLink to='/Login'>Login</NavLink></p>
         </form>
     </div>;
 }

export default SignUp;
