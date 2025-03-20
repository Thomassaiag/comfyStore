import {createSlice} from '@reduxjs/toolkit'


const initialState={

}

const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        createUser:()=>{
            return null
        }
    }
})

console.log(userSlice)

export const { createUser } = userSlice.actions;


export default userSlice.reducer