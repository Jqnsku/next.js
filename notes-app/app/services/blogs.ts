const blogs = [
    { id: 1, title: "Jqnsku's Blog", author: "Jqnsku", url: "https://github.com/Jqnsku/next.js", likes: 31 }
]

let nextId = 2



export const getBlogs = () => {
    return blogs
}

export const getLikesById = (id: number) => {
    const blog = blogs.find((blog) => blog.id === id)

    if (!blog) {
        return 0
    }

    return blog.likes
}

export const incrementLike = (id: number) => {
    const blog = blogs.find((blog) => blog.id === id)

    if (!blog) {
        return 0
    }

    blog.likes += 1

    return blog.likes
}

export const getBlogById = (id: number) => {
    return blogs.find((blog) => blog.id === id)
}

export const addBlog = (title: string, author: string, url: string, likes: number) => {
    blogs.push({ id: nextId++, title, author, url, likes })
}