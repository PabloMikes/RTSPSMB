import { Link, useParams } from "react-router-dom";

export default function CreatedNews() {
  const { id } = useParams();

  return (
    <>
      <p>Your news: {id}</p>

      <Link to={`/news/${id}`}>
        <p>View News</p>
      </Link>

      <Link to="/">
        <p>Go home</p>
      </Link>
    </>
  );
}
