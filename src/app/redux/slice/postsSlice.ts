import { Post } from "@/type";
import { createSlice ,createAsyncThunk,PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
interface postsState{
    posts: []|Post[]
    
}
const initialState:postsState={
    posts:[]
}

export const getPosts=createAsyncThunk("getPosts",async()=>{
    const res= await axios.get("https://jsonplaceholder.typicode.com/posts")

    return res.data
})
const postsSlice=createSlice({
    name:"posts",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(getPosts.fulfilled,(state,action)=>{
            state.posts=action.payload
        })
    },
})

export default postsSlice.reducer