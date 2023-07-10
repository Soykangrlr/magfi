import { User } from "@/type";
import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
interface userState{
    user: User|null
    
}
const initialState:userState={
    user:null
}

export const getUser=createAsyncThunk("getUser",async(userId:number|undefined)=>{
    const res= await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)

    return res.data
})
const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(getUser.fulfilled,(state,action)=>{
            state.user=action.payload
        })
    },
})

export default userSlice.reducer