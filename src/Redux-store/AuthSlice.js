import { createSlice } from "@reduxjs/toolkit";
let id=sessionStorage.getItem('id');
const initialState={id:id,auth:id===null?false:true};
const AuthSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
       logIn(state,actions){
          state.id=actions.payload;
          sessionStorage.setItem('id',actions.payload);
          state.auth=true;
          console.log(state);
       },
       logOut(state){
         state.id=null;
         state.auth=false;
       }
    }
});

export const AuthActions=AuthSlice.actions;
export default AuthSlice.reducer;