import NavBar from "../NavBar/NavBar"
import "./BlogPage.css"

const BlogPage = () => {
    return (
        <div className="blog">
            <NavBar />
            <table className="blog-table">
                <tr>
                    <th>Date</th>
                    <th>Title</th>
                </tr>
                <tr>
                    <td>December 16, 2024</td>
                    <td>The Starting Point</td>
                </tr>
            </table>
        </div>
    )
}

export default BlogPage