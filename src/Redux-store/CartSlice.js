import { createSlice } from "@reduxjs/toolkit";

const initialState={data:[],quantity:0};

const CartSlice=createSlice({
    name:'Cart',
    initialState,
    reducers:{
        replaceCart(state,action){
         console.log(action.payload);
         let arr=action.payload;
         let qty=arr.reduce((total,obj)=>{
             return total+obj.quantity;
         },0);
         console.log(qty);
         state.data=[...arr];
         state.quantity=qty;
         console.log(state);
        },
        initialState(state){
          state.data=[];
          state.quantity=0;
        }
   
     }
});


export const getCartState=(param)=>{
    console.log(param);
    return async dispatch=>{
        const fetchData=async ()=>{
        const response= await fetch(`${process.env.REACT_APP_BACKEND_URL}/cart/${param}`);
        const data =await response.json();
        return data;
        };
        try{
            if(param===null){
                dispatch(CartActions.initialState);
            }
            else{
           const data=await fetchData();
           console.log(data);
           dispatch(CartActions.replaceCart(data));}
        }catch(err){
            console.log(err);
        }
    };
}

export const CartActions=CartSlice.actions;
export default CartSlice.reducer;