
import { Redirect, Route, } from "react-router";
import Header from "./components/Layout/Header";
import Main from "./components/Layout/Main";
import ProductItemCard from "./components/Products/ProductItemCard";
import { Provider } from "react-redux";
import store from './Redux-store/store.js'
import FetchProduct from "./components/Products/FetchProduct";
import React from "react";
import { Suspense } from "react";
import Spinner from "./components/UI/Spinner";

const Login=React.lazy(()=>import('./components/Layout/Login'));
const SignUp=React.lazy(()=>import('./components/Layout/SignUp'))
const Cart=React.lazy(()=>import('./components/Layout/Cart'));
const MenCollection=React.lazy(()=>import('./components/Layout/MenCollection'));
const WomenCollection=React.lazy(()=>import('./components/Layout/WomenCollection'));
const Slider=React.lazy(()=>import('./components/Products/Slider'))


function App() {
  return (
    <Provider store={store}>
    <Suspense fallback={
      <Spinner/>
     }>
        <Route path='/' exact>
           <Header/>
           <Main/>
        </Route>
        {/* <Route path='/home' exact>
           <Header/>
           <Main/>
        </Route> */}

        <Route path='/home/Login' exact>
          <Login/>
        </Route>
      

        <Route path='/home/signUp' exact>
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
    </Suspense>
    </Provider>
  );
}

export default App;
