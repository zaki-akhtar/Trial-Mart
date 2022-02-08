import { createSlice } from "@reduxjs/toolkit";
const initialState={message:null}
const UiSlice=createSlice({
    name:'ui',
    initialState,
    reducers:{
      uimessage(state,actions){
          state.message=actions.payload
      },
      authmessage(state,actions){
          state.message=actions.payload
      }
    }
})
export const UiActions=UiSlice.actions
export default UiSlice.reducer;