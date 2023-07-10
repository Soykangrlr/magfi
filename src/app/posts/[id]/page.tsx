export default function Posts({params}:{params:{id:number}}) {
    return (
        <div className="mx-auto container">
            {params.id}
        </div>
    )
}