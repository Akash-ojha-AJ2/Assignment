import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EnhancedBlogDetails = () => {
  const backend = import.meta.env.VITE_SERVER;
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    axios
      .get(`${backend}/api/enhanced-articles/${id}`)
      .then((res) => setArticle(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!article) {
    return (
      <div style={styles.loader}>
        <p>Loading enhanced article...</p>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        <h1 style={styles.title}>{article.title}</h1>

        <div style={styles.meta}>
          <span>Enhanced Article</span>
          <span>•</span>
          <span>{new Date(article.createdAt).toDateString()}</span>
        </div>

        {article.sources && article.sources.length > 0 && (
          <section style={styles.sourcesSection}>
            <h2 style={styles.sourcesHeading}>Sources & References</h2>

            <ul style={styles.sourcesList}>
              {article.sources.map((src, i) => (
                <li key={i} style={styles.sourceItem}>
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.sourceLink}
                  >
                    {src.title || src.url}
                  </a>
                  <span style={styles.sourceDomain}>
                    ({src.source})
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {article.intro && (
          <section style={styles.intro}>
            <h2 style={styles.introHeading}>
              {article.intro.heading}
            </h2>

            {article.coverImage && (
              <div style={styles.imageWrapper}>
                <img
                  src={article.coverImage}
                  alt={article.title}
                  style={styles.image}
                />
              </div>
            )}

            {article.intro.content?.map((p, i) => (
              <p key={i} style={styles.paragraph}>
                {p}
              </p>
            ))}
          </section>
        )}


        {article.sections?.map((sec, i) => (
          <section key={i} style={styles.section}>
            <h2 style={styles.sectionHeading}>
              {sec.heading}
            </h2>

            {sec.content?.map((p, j) => (
              <p key={j} style={styles.paragraph}>
                {p}
              </p>
            ))}

            {sec.subSections?.map((sub, k) => (
              <div key={k} style={styles.subSection}>
                <h3 style={styles.subHeading}>
                  {sub.title}
                </h3>

                {sub.content?.map((p, m) => (
                  <p key={m} style={styles.paragraph}>
                    {p}
                  </p>
                ))}

                {sub.list?.length > 0 && (
                  <ul style={styles.list}>
                    {sub.list.map((item, x) => (
                      <li key={x}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
};

export default EnhancedBlogDetails;


const styles = {
  page: {
    backgroundColor: "#f8fafc",
    padding: "40px 0",
    minHeight: "100vh",
  },

  container: {
    maxWidth: "900px",
    margin: "0 auto",
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  },

  title: {
    fontSize: "36px",
    fontWeight: "700",
    marginBottom: "10px",
    color: "#0f172a",
  },

  meta: {
    display: "flex",
    gap: "10px",
    color: "#64748b",
    fontSize: "14px",
    marginBottom: "30px",
  },

  intro: {
    backgroundColor: "#f1f5f9",
    padding: "20px",
    borderRadius: "8px",
    marginBottom: "40px",
  },

  introHeading: {
    fontSize: "22px",
    marginBottom: "10px",
    color: "#0f172a",
  },

  section: {
    marginBottom: "40px",
  },

  sectionHeading: {
    fontSize: "26px",
    marginBottom: "15px",
    color: "#020617",
    borderBottom: "2px solid #e2e8f0",
    paddingBottom: "6px",
  },

  subSection: {
    marginTop: "20px",
    paddingLeft: "15px",
    borderLeft: "3px solid #38bdf8",
  },

  subHeading: {
    fontSize: "20px",
    marginBottom: "10px",
    color: "#0369a1",
  },

  paragraph: {
    fontSize: "16px",
    lineHeight: "1.8",
    color: "#334155",
    marginBottom: "14px",
  },

  list: {
    marginLeft: "20px",
    marginTop: "10px",
    color: "#334155",
  },

  loader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
    fontSize: "18px",
    color: "#475569",
  },
  imageWrapper: {
    width: "100%",
    margin: "20px 0",
    borderRadius: "10px",
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "auto",
    display: "block",
    objectFit: "cover",
  },

  sourcesSection: {
    marginTop: "50px",
    paddingTop: "20px",
    borderTop: "2px dashed #e2e8f0",
  },

  sourcesHeading: {
    fontSize: "22px",
    marginBottom: "15px",
    color: "#0f172a",
  },

  sourcesList: {
    listStyleType: "disc",
    marginLeft: "20px",
  },

  sourceItem: {
    marginBottom: "10px",
    fontSize: "15px",
    color: "#334155",
  },

  sourceLink: {
    color: "#2563eb",
    textDecoration: "none",
    fontWeight: "500",
  },

  sourceDomain: {
    marginLeft: "6px",
    color: "#64748b",
    fontSize: "14px",
  },

};
