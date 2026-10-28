
import { getBlogs } from "../services/blogs"
import BlogList from "./BlogList"

const Blogs = async ({
    searchParams,
}: {
    searchParams: Promise<{ q: string }>
}) => {
    const blogs = await getBlogs({ searchParams })

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