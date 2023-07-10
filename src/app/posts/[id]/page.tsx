"use client"
import { faker } from '@faker-js/faker';
import { getComments } from "@/app/redux/slice/commentsSlice"
import { getPostDetail } from "@/app/redux/slice/postDetailSlice"
import { getUser } from "@/app/redux/slice/userSlice"
import { useAppDispatch, useAppSelector } from "@/app/redux/store"
import CommentsCard from "@/components/commentscard"
import { useEffect } from "react"

export default function Posts({ params }: { params: { id: number} }) {
    const post = useAppSelector(state => state.postDetailSlice.post)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getPostDetail(params.id))
        dispatch(getComments(params.id))
    }, [])
    useEffect(() => {
        dispatch(getUser(post?.userId))
    }, [post])
    const user = useAppSelector(state => state.userSlice.user)
    const comments=useAppSelector(state=>state.commentsSlice.comments)
    return (
        <div className="mx-auto container mt-10 flex justify-center ">
            <div className=" max-w-5xl border border-gray-500 p-6 rounded-md ">
                <div className="md:flex-row flex flex-col  gap-x-6 md:items-center text-center md:text-left">
                <img src={faker.image.avatarLegacy()} alt="" className="rounded-full mx-auto" />
                <div className=" flex flex-col gap-y-5">
                    <div>
                    <p className="text-blue-950 font-bold text-2xl mb-1">{user?.name}</p>
                    <p className="text-gray-600 font-light text-sm">{user?.email}</p>
                    </div>
                   
                    <hr />
                    <h3 className="text-xl font-semibold uppercase">{post?.title}</h3>
                    <p className="">{post?.body}</p>
                </div>
                </div>
                <div className="p-4 border mt-5 bg-gray-100">
                    <p className="mb-3 text-blue-800 font-semibold">Comments</p>
                    <hr className="border-black" />
                    {comments.map(comment=>(
                        <div key={comment.id} className="p-3">
                            <CommentsCard image={faker.image.avatarLegacy()} body={comment.body} email={comment.email} name={comment.name} ></CommentsCard>

                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}