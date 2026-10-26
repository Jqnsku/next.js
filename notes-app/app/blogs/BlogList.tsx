import Link from "next/link";

type Blog = {
    id: number
    title: string
    author: string
    url: string
    likes: number
}

const BlogList = ({ blogs }: { blogs: Blog[] }) => {

    return (
        <div>
            <ul>
                {blogs.map((blog) => (
                    <li key={blog.id}>

                        <Link href={`/blogs/${blog.id}`}>
                            {blog.id}
                            {blog.title}
                            {blog.author}
                            {blog.url}
                            {blog.likes}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BlogList