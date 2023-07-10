import { Post } from "@/type";
import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
interface postState{
    post: Post|null
    
}
const initialState:postState={
    post:null
}

export const getPostDetail=createAsyncThunk("getPostDetail",async(id:number)=>{
    const res= await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)

    return res.data
})
const postsDetailSlice=createSlice({
    name:"postDetail",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(getPostDetail.fulfilled,(state,action)=>{
            state.post=action.payload
        })
    },
})

export default postsDetailSlice.reducer