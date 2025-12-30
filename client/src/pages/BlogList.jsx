import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./BlogList.css";

export default function BlogList() {
  const backend = import.meta.env.VITE_SERVER;
  const [blogs, setBlogs] = useState([]);
  const [loadingId, setLoadingId] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const res = await axios.get(`${backend}/api/articles`);
    setBlogs(res.data);
  };

  const handleEnhance = async (id) => {
    try {
      setLoadingId(id);

      await axios.put(
        `${backend}/api/enhance/${id}`
      );

      alert("Article enhanced successfully ✅");
      fetchBlogs();
    } catch (error) {
      console.error(error);
      alert("Enhance failed ❌");
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className="blog-list-page">
      {blogs.map((blog) => (
        <div className="blog-row" key={blog._id}>
          
          <div className="blog-left">
            <img src={blog.coverImage} alt={blog.title} />
          </div>

          <div className="blog-right">
            
            <div className="tag-row">
              {blog.tags.map((tag, i) => (
                <span key={i} className="tag">#{tag}</span>
              ))}
            </div>

            <Link to={`/blog/${blog._id}`} className="blog-title">
              {blog.title}
            </Link>

            <p className="blog-desc">{blog.description}</p>

            <div className="blog-meta-row">
              <div className="blog-meta">
                <span className="author">{blog.author}</span>
                <span className="dot">•</span>
                <span className="date">{blog.date}</span>
              </div>

              <button
                className="enhance-btn"
                onClick={() => handleEnhance(blog._id)}
                disabled={loadingId === blog._id}
              >
                {loadingId === blog._id ? "Enhancing..." : "Enhance"}
              </button>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}

