import { Post } from "@/type"

function PostCard(props:Post){
const {id,title,body}=props
    return (
        <div className="p-2 border-b-1 border-gray-700 flex gap-x-4 mt-5 border rounded hover:scale-110 transition delay-75 duration-100 cursor-pointer items-center">
            <img src={`https://picsum.photos/id/${id}/100/100`} alt="" className="md:w-28 md:h-28 w-20 h-20 " />
            <div >
                <h2 className="md:text-2xl text-sm font-bold">{title}</h2>
                <p className="text-xs md:text-base" >{body}</p>
            </div>
        </div>
    )
}
export default PostCard