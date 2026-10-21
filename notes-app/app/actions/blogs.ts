"use server"


import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { addBlog } from "../services/blogs"

export const createBlog = async (FormData: FormData) => {
    const title = FormData.get("title") as string
    const author = FormData.get("author") as string
    const url = FormData.get("url") as string
    const likes = FormData.get("likes") as string
    addBlog(title, author, url, likes)

    revalidatePath("/blogs")
    redirect("/blogs")
}