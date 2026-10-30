
import { getBlogs } from "../services/blogs"
import BlogList from "./BlogList"

export const instant = false

const Blogs = async ({
    searchParams,
}: {
    searchParams: Promise<{ q: string }>
}) => {
    const { q } = await searchParams
    const blogs = await getBlogs(q)

    return (
        <div>
            <h2>Blogs</h2>

            <form method="GET">
                <input
                    type="text"
                    name="q"
                    placeholder="Search blogs by title"
                />
                <button type="submit">Search</button>
            </form>

            <BlogList filteredBlogs={blogs} />
        </div>
    )
}

export default Blogs