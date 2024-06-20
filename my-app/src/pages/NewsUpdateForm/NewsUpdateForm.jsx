import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { updateNews, getNews } from "../../models/News";

export default function NewsUpdateForm() {
  // useParams - vytazeni hodnoty z dynamickeho parametru url adresy
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

  const postForm = async () =>{
    const news = await updateNews(id, formData);
    if(news.status === 200){
        navigate(`/news/${id}`)
    }
    else{
        setInfo(news.msg);
    }
}

const handleChange = (e) =>{
    setFormData({...formData, [event.target.name]: e.target.value});
}
const handlePost = (e) =>{
    e.preventDefault();
    postForm();
}

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
      <h1>Update your news</h1>
      <p>{id}</p>
      <form>
            <input type="text" defaultValue={news.creator} name="creator" required placeholder="Enter creator" onChange={e => handleChange(e)} />
            <input type="date" defaultValue={news.date} name="date" required placeholder="Enter date" onChange={e => handleChange(e)} />
            <input type="header" defaultValue={news.header} name="header" required placeholder="Enter header" onChange={e => handleChange(e)} />
            <input type="text" defaultValue={news.text} name="text" required placeholder="Enter text" onChange={e => handleChange(e)} />
            <button onClick={handlePost}>
                Update News
            </button>
        </form>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
