
const blog = () => {
    return (
        <div>
            <h2>Blogs</h2>
            <div>
                <label>
                    id:
                    <input type="text" name="id" required />
                </label>
            </div>
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
            <div>
            <label>
                likes:
                <input type="text" name="title" required />
            </label>
            </div>
            </div>
        </div>
    )
}

export default blog