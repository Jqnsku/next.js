"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { likeBlog } from "../../actions/likes/likes";

type LikeButtonProps = {
    blogLikes: number,
    blogId: number,
}


const LikeButton = ({ blogLikes, blogId }: LikeButtonProps) => {
    const [likes, setLikes] = useState(blogLikes)
    const router = useRouter()

    const handleLike = async () => {
        const updatedLikes = await likeBlog(blogId)
        setLikes(Number(updatedLikes))
        router.refresh()
    }

    return (
        <div>
            {/* likes: {likes} */}
            <button onClick={handleLike}>Like</button>
        </div>
    )
}

export default LikeButton