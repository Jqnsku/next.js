import { eq, sql, ilike } from "drizzle-orm"
import { db } from "../db"
import { blogs } from "../db/schema"

const localblogs = [
    { id: 1, title: "Jqnsku's Blog", author: "Jqnsku", url: "https://github.com/Jqnsku/next.js", likes: 31 }
]

let nextId = 2


export const getBlogs = async (q: string) => {
    if (q) {
        return await db
        .select()
        .from(blogs)
        .where(ilike(
            blogs.title, `%${q}%`
        ))
    }
    return db.query.blogs.findMany({
    })
}


// blogs.filter(blog => blog.title.includes(q))

//  let filteredBlogs = blogs

//  if (q) {
//      filteredBlogs = blogs.filter(blog => blog.title.toLowerCase().includes(q.toLowerCase()))
//  }

//  blogs.sort((a, b) => {
//      return b.likes - a.likes
//  })
//  return filteredBlogs
// }

export const getLikesById = async (id: number) => {
    const result = await db
        .select({
            likes: blogs.likes,
        })
        .from(blogs)
        .where(eq(blogs.id, id))

    const blog = result[0]

    if (blog) return blog.likes

    // const blog = getBlogById(id)

    // if (!blog) {
    //     return 0
    // }

    return 0
}

export const incrementLike = async (id: number) => {
    // const blog = await getBlogById(id)

    // if (!blog) {
    await db
        .update(blogs)
        .set({ likes: sql`likes + 1` })
        .where(eq(blogs.id, id))
}
// return 0

// blog.likes += 1

// return blog.likes


export const getBlogById = async (id: number) => {
    return db.query.blogs.findFirst({
        where: eq(blogs.id, id)
    })
    // (blog) => blog.id === id)
}

export const addBlog = async (
    title: string, author: string, url: string, likes: number) => {
    await db.insert(blogs).values({
        title,
        author,
        url,
        likes
    })
}
// blogs.push({ id: nextId++, title, author, url, likes })