
"use server"
import { incrementLike } from '../../services/blogs'
import { revalidatePath } from 'next/cache'

export async function likeBlog(formData: FormData) {
    const id = Number(formData.get("id"))

    incrementLike(id)

    revalidatePath(`/blogs/${id}`)

// export async function likeBlog(id: number) {
//     const updatedLikes = incrementLike(id)
//     return updatedLikes
}