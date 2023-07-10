import { Comments, User } from "@/type";
import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
interface commentState{
    comments: Comments[]|[]
    
}
const initialState:commentState={
    comments:[]
}

export const getComments=createAsyncThunk("getcomments",async(id:number|undefined)=>{
    const res= await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)

    return res.data
})
const commentsSlice=createSlice({
    name:"comments",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(getComments.fulfilled,(state,action)=>{
            state.comments=action.payload
        })
    },
})

export default commentsSlice.reducer