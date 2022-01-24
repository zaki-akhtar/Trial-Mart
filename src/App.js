
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
import { Provider } from "react-redux";
import store from './Redux-store/store.js'

function App() {
  return (
     <Provider store={store}>
   
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

        <Route path='/items/post'>
          <Slider/>
        </Route>

    
    </Provider>
  );
}

export default App;
