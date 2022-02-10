import { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import classes from './Nav.module.css';
import cartImage from'../images/cart.png';
import menuIcon from '../images/menu-bar.png';
import { Fragment } from 'react/cjs/react.production.min';
import { useDispatch, useSelector } from 'react-redux';
import { CartActions, getCartState } from '../../Redux-store/CartSlice';
import { AuthActions } from '../../Redux-store/AuthSlice';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';



const Nav=()=>{
    
    let dispatch=useDispatch();
    let cartQty=useSelector(state=>state.Cart.quantity);
    let auths=useSelector(state=>state.Auth);
    let history=useHistory();
  

    const [isSearch,setSearchInput]=useState(false);
    const [isVisibleNav,setVisibleNav]=useState(false);
   
    const [auth,setAuth]=useState(auths);
    const [isVisibleLogin,setVisibleLogin]=useState(null);
    console.log(auth);
    let id=sessionStorage.getItem('id');
   
    dispatch(getCartState(id));
    console.log(cartQty);
  
    useEffect(()=>{
        setVisibleLogin(id);
    },[]);

    
    const searchHandler=()=>{
         setSearchInput(prev=>!prev);
    }

    const visibleHandler=()=>{
        setVisibleNav(prev=>!prev);
    }
    const logoutHandler=()=>{
        sessionStorage.removeItem('id');
        dispatch(AuthActions.logOut);
        dispatch(CartActions.initialState);
        window.location.reload();
    }
    
    
       
    

    return<nav className={classes.header}>
        <ul className={classes.nav} >
            <li className={classes.nav_title}><h2>Trial Mart</h2></li>
            { <Fragment>   {  <li  className={isSearch ?classes.nav_list_search_after: classes.nav_list_search}><input  placeholder=' search...'></input></li>}
           <li onClick={searchHandler}className={`${isVisibleNav &&classes.nav_list_opa} ${classes.nav_list}`}><i class="fas fa-search"></i></li>  
           <li className={`${isVisibleNav &&classes.nav_list_opa} ${classes.nav_list}`}>
                <Link to='/'>Items</Link>
                <ul  className={classes.navListContainer}>
                  <li><Link to={{pathname:'/collections/post/All',state:{name:'All'}}}>All</Link></li>
                  <li><Link to={{pathname:"/collections/post/Tshirt",state:{name:'Tshirt'}}}>Tshirt</Link></li>
                  <li><Link to={{pathname:"/collections/post/Hoodie", state:{name:'Hoodie'}}}>Hoodie</Link></li>
                  <li><Link to={{pathname:"/collections/post/Shoes",state:{name:'Shoes'}}}>Shoes</Link></li>
                  <li><Link to={{pathname:"/collections/post/jeans",state:{name:'Jeans'}}}>Jeans</Link></li>
                </ul>
             </li>
           {isVisibleLogin===null && <li className={`${isVisibleNav &&classes.nav_list_opa} ${classes.nav_list}`}><Link to='/home/Login'>Login</Link></li>}
            <li className={`${isVisibleNav &&classes.nav_list_opa} ${classes.nav_list}`}><Link to='/home/signUp'>signUp</Link></li>
           {isVisibleLogin!==null &&  <li className={`${isVisibleNav &&classes.nav_list_opa} ${classes.nav_list}`} onClick={logoutHandler}><Link to='/'>LogOut</Link></li>}
            <li className={`${isVisibleNav &&classes.nav_list_opa} ${classes.nav_list}`}><Link to={`/Cart/${auth.id}`}><img src={cartImage} alt=''/><span>{cartQty}</span></Link></li></Fragment> }

            {<li className={classes.menu} onClick={visibleHandler}><img src={menuIcon}/></li> }
        </ul>
    </nav> ;
}

export default Nav;