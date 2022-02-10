
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { AuthActions } from '../../Redux-store/AuthSlice';
import classes from './Login.module.css';
import { getCartState } from '../../Redux-store/CartSlice';
import { UiActions } from '../../Redux-store/UiSlice';
import Card from '../UI/Card';
import Spinner from '../UI/Spinner';

const Login=()=>{
     
    let dispatch=useDispatch();
    let history=useHistory();
    const[isCardshown,setCardshown]=useState(false);
    const[isSpinner,setSpinner]=useState(false);

    const emailref=useRef("");
    const passwordref=useRef("");
    const loginHandler=(e)=>{
        e.preventDefault(); 
        if(emailref.current.value.length===0 || passwordref.current.length===0){
            dispatch(UiActions.uimessage('Enter valid information'));
            setCardshown(true);
            return ;
        }
        setSpinner(true);
        const validatingUser=async()=>{
                const response=await fetch(`${process.env.REACT_APP_BACKEND_URL}/Login`,{
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify({
                    email:emailref.current.value,
                    password:passwordref.current.value,
                })
            });
            if(!response.ok){
               console.log('something went wrong');
            }
            const data=await response.json();
            let id=sessionStorage.getItem('id');
            console.log(data);
            setSpinner(false);
            if(id===null && data!=='0' && data!=='p'){
                dispatch(AuthActions.logIn(data));
                dispatch(getCartState(data));
                history.push('/');
            }
            else if(id===null && data==='0'){
                dispatch(UiActions.uimessage('first you  have to create An Acount'));
                setCardshown(true);
            }
            else if(id===null && data==='p'){
                dispatch(UiActions.uimessage('Your Password is Incorrect'));
                setCardshown(true);
            }
            else if(id!=null){
                dispatch(UiActions.uimessage('first you have to LogOut'));
                setCardshown(true);
            }
            else{
                dispatch(UiActions.uimessage('something is wrong '));
                setCardshown(true); 
            }
           
            
            
        }
        validatingUser();
        console.log(emailref.current.value);
        emailref.current.value="";
        passwordref.current.value="";
    }
    const CardCloseHandler=()=>{
        setCardshown(false);
    }

    return <div className={classes.loginContainer}>
        <form onSubmit={loginHandler}>
            <h1>Login Here</h1>
            <input ref={emailref}type='email' placeholder=' Email' />
            <input ref={passwordref}type='password' placeholder=' Password'/>
            <button type='submit'>Log In</button>
            <div>
                <NavLink to='/home/signUp'>create Acount</NavLink>
                <NavLink to='/'>Help</NavLink>
            </div>
        </form>
       {isCardshown && <Card onClose={CardCloseHandler}/>}
       {isSpinner && <Spinner/>}
    </div>;
}

export default Login;