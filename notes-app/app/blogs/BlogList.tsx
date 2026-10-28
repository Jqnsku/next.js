import Link from "next/link";

type Blog = {
    id: number
    title: string
    author: string
    url: string
    likes: number
}

const BlogList = ({ filteredBlogs }: { filteredBlogs: Blog[] }) => {

    return (
        <div>
            <ul>
                {filteredBlogs.map((blog) => (
                    <li key={blog.id}>

                        <Link href={`/blogs/${blog.id}`}>
                            {blog.id}
                            {blog.title}
                            {blog.author}
                            {blog.url}
                            {blog.likes}
                        </Link>
                        <h2></h2>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BlogList