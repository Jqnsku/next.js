import { getBlogs } from "../services/blogs"
import BlogList from "./BlogList"

export const instant = false

const Blogs = () => {
    const blogs = getBlogs()
    return (
        <div>
            <h2>Blogs</h2>
            <BlogList blogs={blogs} />
            {/* <ul>
                {blogs.map(blog => (
                    <li key={blog.id}>
                        <ul>
                            {blog.title}
                        </ul>
                        <ul>
                            {blog.author}
                        </ul>
                        <ul>
                            {blog.url}
                        </ul>
                        <ul>
                            {blog.likes}
                        </ul>
                        <br></br>
                    </li>
                ))}
            </ul> */}

        </div>
    )
}

export default Blogs