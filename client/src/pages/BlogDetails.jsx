import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./BlogDetails.css"

export default function BlogDetails() {
  const backend = import.meta.env.VITE_SERVER;
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    axios
      .get(`${backend}/api/articles/${id}`)
      .then(res => setArticle(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!article) return <p>Loading...</p>;

  return (
    <div className="blog-container">
      <h1 className="blog-title">{article.title}</h1>
      <p className="meta">
        {article.author} • {article.date}
      </p>

      <div className="tags">
        {article.tags.map((tag, i) => (
          <span key={i}>#{tag}</span>
        ))}
      </div>

      <section className="intro">
        <h2>{article.intro.heading}</h2>

      <img
        src={article.coverImage}
        alt={article.title}
        className="cover-img"
      />

        {article.intro.content.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </section>

      {article.sections.map((section, i) => (
        <section key={i} className="section">
          <h2>{section.heading}</h2>

          {section.content &&
            section.content.map((para, j) => (
              <p key={j}>{para}</p>
            ))}

          {section.subSections &&
            section.subSections.map((sub, k) => (
              <div key={k} className="sub-section">
                <h3>{sub.title}</h3>

                {sub.content.map((para, l) => (
                  <p key={l}>{para}</p>
                ))}

                {sub.list && (
                  <ul>
                    {sub.list.map((item, m) => (
                      <li key={m}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
        </section>
      ))}
    </div>
  );
}
