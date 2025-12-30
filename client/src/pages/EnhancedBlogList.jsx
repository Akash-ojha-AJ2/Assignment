import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const EnhancedBlogList = () => {
  const backend = import.meta.env.VITE_SERVER;
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get(`${backend}/api/enhanced-articles`)
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Enhanced Articles</h1>

        {blogs.map((blog) => (
          <Link
            to={`/enhanced/${blog._id}`}
            key={blog._id}
            style={styles.cardLink}
          >
            <div style={styles.card}>
              {/* IMAGE */}
              <div style={styles.imageWrapper}>
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  style={styles.image}
                />
              </div>

              {/* CONTENT */}
              <div style={styles.content}>
                {/* TAGS */}
                <div style={styles.tags}>
                  {blog.tags?.map((tag, i) => (
                    <span key={i} style={styles.tag}>
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* TITLE */}
                <h2 style={styles.title}>{blog.title}</h2>

                {/* META */}
                <div style={styles.meta}>
                  <span>{blog.author || "Admin"}</span>
                  <span>•</span>
                  <span>
                    {new Date(blog.createdAt).toDateString()}
                  </span>
                </div>
              </div>
            </div>

            <hr style={styles.divider} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EnhancedBlogList;


const styles = {
  page: {
    backgroundColor: "#ffffff",
    padding: "40px 0",
  },

  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 20px",
  },

  heading: {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "40px",
    color: "#020617",
  },

  cardLink: {
    textDecoration: "none",
    color: "inherit",
  },

  card: {
    display: "flex",
    gap: "30px",
    alignItems: "center",
    padding: "30px 0",
  },

  imageWrapper: {
    width: "320px",
    height: "180px",
    borderRadius: "12px",
    overflow: "hidden",
    flexShrink: 0,
    backgroundColor: "#f1f5f9",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  content: {
    flex: 1,
  },

  tags: {
    display: "flex",
    gap: "10px",
    marginBottom: "10px",
  },

  tag: {
    backgroundColor: "#f1f5f9",
    color: "#334155",
    fontSize: "13px",
    padding: "6px 12px",
    borderRadius: "999px",
  },

  title: {
    fontSize: "28px",
    fontWeight: "700",
    lineHeight: "1.3",
    marginBottom: "12px",
    color: "#020617",
  },

  meta: {
    display: "flex",
    gap: "10px",
    color: "#64748b",
    fontSize: "14px",
  },

  divider: {
    border: "none",
    borderBottom: "1px solid #e5e7eb",
    margin: "0",
  },
};
