
"use client"

import { likeBlog } from "../../actions/likes/likes"

type LikeButtonProps = {
    blogId: number
}

const LikeButton = ({ blogId }: LikeButtonProps) => {
    return (
        <form action={likeBlog}>
            <input type="hidden" name="id" value={blogId} />
            <button type="submit">Like</button>
        </form>
    )
}

export default LikeButton
