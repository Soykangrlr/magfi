"use client"
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from './redux/store'
import { getPosts } from './redux/slice/postsSlice'
import PostCard from '@/components/postCard'
import Link from 'next/link'


export default function Home() {
  const dispatch=useAppDispatch()
  const [page,setPage]=useState(10)
  useEffect(()=>{
   dispatch(getPosts())
  },[])
  const posts=useAppSelector(state=>state.postsSlice.posts)
  return (
   <div className='mx-auto container'>
    {
      posts.slice(0,page).map(post=>(
        <Link href={`posts/${post.id}`}>
          <PostCard title={post.title} id={post.id} body={post.body} userId={post.userId}></PostCard>
          </Link>

      ))
    }
    {page+10<=posts.length&&
    <div className='text-center my-4'>
      <button onClick={()=>setPage(page=>page+10)} className='bg-blue-700 py-2 px-4 text-white rounded-lg '>Daha Fazla Yükle</button>
    </div>}
    
   </div>
  )
}
