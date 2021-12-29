import { Fragment } from "react";
import { Redirect, Route, } from "react-router";
// import ProductAll from "./components/Products/ProductAll";
import Header from "./components/Layout/Header";
import SignUp from "./components/Layout/SignUp";
import Login from "./components/Layout/Login";
import Cart from "./components/Layout/Cart";
import Main from "./components/Layout/Main";
import MenCollection from "./components/Layout/MenCollection";
import WomenCollection from "./components/Layout/WomenCollection";
import ProductItemCard from "./components/Products/ProductItemCard";
import Slider from "./components/Products/Slider";


function App() {
  return (
    <Fragment>
        <Route path='/' exact>
          <Redirect to='/home'/>
        </Route>
        <Route path='/home' exact>
           <Header/>
           <Main/>
        </Route>

        <Route path='/Login'>
          <Login/>
        </Route>

        <Route path='/signUp'>
         <SignUp/>
        </Route >

         <Route path='/Cart'>
          <Cart/>
        </Route>

        <Route path='/home/Men' exact>
        <MenCollection/>
        </Route>

        <Route path='/home/Women' exact>
        <WomenCollection/>
        </Route>

        <Route path='/items' exact>
          <ProductItemCard/>
        </Route>

        <Route path='/items/:collections'>
          <Slider/>
        </Route>

    </Fragment>
  );
}

export default App;
