"use client"
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './redux/store'
import { getPosts } from './redux/slice/postsSlice'
import PostCard from '@/components/postCard'
import Link from 'next/link'


export default function Home() {
  const dispatch=useAppDispatch()
  useEffect(()=>{
   dispatch(getPosts())
  },[])
  const posts=useAppSelector(state=>state.postsSlice.posts)
  return (
   <div className='mx-auto container'>
    {
      posts.map(post=>(
        <Link href={`posts/${post.id}`}>
          <PostCard title={post.title} id={post.id} body={post.body} userId={post.userId}></PostCard>
          </Link>
      ))
    }
   </div>
  )
}
