import { Link } from "react-router-dom";
import NewsLink from "./NewsLink";
import { useState, useEffect } from "react";
import { getAllNews } from "../../models/News";

export default function NewsList() {
  const [news, setNews] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllNews();
    if (data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setNews(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>News not found 3:</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>News are loading :3</p>
      </>
    );
  }
  return (
    <>
      <h1>See all news here</h1>
      {
        news.map((news, index) =>(
            <NewsLink key={index} {...news} />
        ))
      }
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
