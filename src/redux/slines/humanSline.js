import { createSlice } from "@reduxjs/toolkit";
import human from "../../components/Step/dataHuman";

const initialState = human
// console.log(initialState)

export const  humanSline = createSlice({
    name: 'human',
    initialState,

    reducers: {
        addHuman: (state,action)=>{
            state.push(action.payload)
            // state = [...state,action.payload]
            console.log(state)
        },
        deleteHuman: (state,action) => {
            const removeId = action.payload 
             state= state.filter(hm=> hm.id !== removeId)
             return state
            
        },
    },
})
console.log()
export  const { addHuman, deleteHuman } = humanSline.actions

export default humanSline.reducer