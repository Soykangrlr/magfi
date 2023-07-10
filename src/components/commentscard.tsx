import { Comments } from "@/type"
interface Card {
    name: Comments["name"],
    email: Comments["email"],
    body: Comments["body"],
    image: string
}
function CommentsCard(props: Card) {
    const { name, email, body, image } = props
    return (

        <div className="p-2 mx-6  flex gap-x-4 mt-2  border-b-2 items-center">

            <img src={image} alt="" className="w-16 rounded-md" />
            <div >
                <p className="md:text-lg text-sm font-semibold ">{name}</p>
                <p className="font-light text-sm mb-2">{email}</p>
                <p className="text-xs md:text-base" >{body}</p>
            </div>
          
        </div>

    )
}
export default CommentsCard