import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getNews, deleteNews } from "../../models/News";

export default function NewsView() {
  const { id } = useParams();
  const [news, setNews] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getNews(id);
    if (data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setNews(data.payload);
      setLoaded(true);
    }
  };

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (news.header === formData) {
      const data = await deleteNews(id);
      if (data.status === 200) {
        navigate("/");
      } else {
        setInfo(data.msg);
      }
    } else {
      setInfo("Wrong Input");
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>News werent found 3:</p>
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
      <h1>See your news here</h1>
      <p>{id}</p>
      <p>{news.creator}</p>
      <p>{news.date}</p>
      <p>{news.header}</p>
      <p>{news.text}</p>
      <p>{news.rating}</p>
      <Link to={`/updatenews/${id}`}>
        <p>Update news</p>
      </Link>
      <form>
        <input type="text" onChange={handleChange} placeholder={news.header} />
        <button onClick={handleDelete}>Delete News</button>
        <p>{info}</p>
      </form>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
