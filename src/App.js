
import { Redirect, Route, } from "react-router";
import Header from "./components/Layout/Header";
// import SignUp from "./components/Layout/SignUp";
// import Login from "./components/Layout/Login";
// import Cart from "./components/Layout/Cart";
import Main from "./components/Layout/Main";
// import MenCollection from "./components/Layout/MenCollection";
// import WomenCollection from "./components/Layout/WomenCollection";
import ProductItemCard from "./components/Products/ProductItemCard";
// import Slider from "./components/Products/Slider";
import { Provider } from "react-redux";
import store from './Redux-store/store.js'
import FetchProduct from "./components/Products/FetchProduct";
import React from "react";
import { Suspense } from "react";
import Spinner from "./components/UI/Spinner";

const SignUp=React.lazy(()=>import('./components/Layout/SignUp'));
const Login=React.lazy(()=>import('./components/Layout/Login'));
const Cart=React.lazy(()=>import('./components/Layout/Cart'));
const MenCollection=React.lazy(()=>import('./components/Layout/MenCollection'));
const WomenCollection=React.lazy(()=>import('./components/Layout/WomenCollection'));
const Slider=React.lazy(()=>import('./components/Products/Slider'))


function App() {
  return (
    <Suspense fallback={
      <Spinner/>
     }>
     <Provider store={store}>
       
        <Route path='/' exact>
          <Redirect to='/home'/>
        </Route>
        <Route path='/home' exact>
           <Header/>
           <Main/>
        </Route>

        <Route path='/Login' exact>
          <Login/>
        </Route>
      

        <Route path='/signUp' exact>
         <SignUp/>
        </Route >

         <Route path='/Cart/:id' exact>
          <Cart/>
        </Route>

        <Route path='/home/Men' exact>
        <MenCollection/>
        </Route>

        <Route path='/home/Women' exact>
        <WomenCollection/>
        </Route>

        <Route path='/:types/items' exact>
          <ProductItemCard/>
        </Route>

        <Route path='/items/post' exact>
          <Slider/>
        </Route>
        <Route path='/collections/post/:name'  >
          <FetchProduct/>
        </Route>
        
    </Provider>
    </Suspense>
  );
}

export default App;
