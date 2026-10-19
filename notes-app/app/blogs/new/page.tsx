
const newBlog = () => {
    return (
        <div>
            <h2>Create a new blog</h2>
            <div>
            <label>
                title:
                <input type="text" name="title" required />
            </label>
            </div>
            <div>
            <label>
                author:
                <input type="text" name="author" required />
            </label>
            <div>
            <label>
                url:
                <input type="text" name="url" required />
            </label>
            </div>
            </div>
        </div>
    )
}

export default newBlog