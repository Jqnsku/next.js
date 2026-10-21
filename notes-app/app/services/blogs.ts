const blogs = [
    { id: 1, title: "Otsikko", author: "Pekka", url: "testi123", likes: "31" }
]

let nextId = 2

export const getBlogs = () => {
    return blogs 
}

export const addBlog = (title: string, author: string, url: string, likes: string) => {
    blogs.push({ id: nextId++, title, author, url, likes })
}