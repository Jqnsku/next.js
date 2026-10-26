
"use server"
import { incrementLike } from '../../services/blogs'

export async function likeBlog(id: number) {
    const updatedLikes = incrementLike(id)
    return updatedLikes
}