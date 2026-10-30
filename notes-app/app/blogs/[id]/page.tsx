import { notFound } from "next/navigation"
import { getBlogById } from "../../services/blogs"
import { getLikesById } from "../../services/blogs"
import { incrementLike } from "../../services/blogs"
import LikeButton from "../likes/LikeButton"


export const instant = false


const blogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params
    const blogId = (Number(id))


    const likes = await getLikesById(Number(id))
    const blog = await getBlogById(blogId)

    if (!blog) {
        notFound()
    }

    return (
        <div>
            <ul>
                <li>
                    <p>Title: {blog.title}</p>
                    <p>Author: {blog.author}</p>
                    <p>URL: {blog.url}</p>
                    <p>Likes: {blog.likes}</p>
                </li>
                <LikeButton
                  
                    blogId={blog.id}
                />
            </ul>
        </div>
    )
}

export default blogPage