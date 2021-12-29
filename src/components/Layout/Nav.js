import { useState } from 'react';
import { NavLink ,Link} from 'react-router-dom';
import classes from './Nav.module.css';
import cartImage from'../images/cart.png';
import menuIcon from '../images/menu-bar.png';
import { Fragment } from 'react/cjs/react.production.min';



const Nav=()=>{
    const[isSearch,setSearchInput]=useState(false);
    const[isVisibleNav,setVisibleNav]=useState(false);

    const searchHandler=()=>{
         setSearchInput(prev=>!prev);
    }

    const visibleHandler=()=>{
        setVisibleNav(prev=>!prev);
    }
    
    
       
    

    return<nav className={classes.header}>
        <ul className={classes.nav} >
            <li className={classes.nav_title}><h2>Trial Mart</h2></li>
            { <Fragment>   {  <li  className={isSearch ?classes.nav_list_search_after: classes.nav_list_search}><input  placeholder=' search...'></input></li>}
           <li onClick={searchHandler}className={`${isVisibleNav &&classes.nav_list_opa} ${classes.nav_list}`}><i class="fas fa-search"></i></li>  
           <li className={`${isVisibleNav &&classes.nav_list_opa} ${classes.nav_list}`}>
                <NavLink to='/'>Items</NavLink>
                <ul  className={classes.navListContainer}>
                  <li><Link to="/">Link 1</Link></li>
                  <li><Link to="/">Link 2</Link></li>
                  <li><Link to="/">Link 3</Link></li>
                  <li><Link to="/">Link 1</Link></li>
                  <li><Link to="/">Link 2</Link></li>
                </ul>
             </li>
            <li className={`${isVisibleNav &&classes.nav_list_opa} ${classes.nav_list}`}><NavLink to='/Login'>Login</NavLink></li>
            <li className={`${isVisibleNav &&classes.nav_list_opa} ${classes.nav_list}`}><NavLink to='/signUp'>signUp</NavLink></li>
            <li className={`${isVisibleNav &&classes.nav_list_opa} ${classes.nav_list}`}><NavLink to='/Cart'><img src={cartImage} alt=''/></NavLink></li></Fragment> }
            {<li className={classes.menu} onClick={visibleHandler}><img src={menuIcon}/></li> }
        </ul>
    </nav> ;
}

export default Nav;