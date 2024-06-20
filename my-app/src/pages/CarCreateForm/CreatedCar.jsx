import { Link, useParams } from "react-router-dom";

export default function createdCar() {
  const { id } = useParams();

  return (
    <>
      <p>Your car: {id}</p>

      <Link to={`/car/${id}`}>
        <p>View Car</p>
      </Link>

      <Link to="/">
        <p>Go home</p>
      </Link>
    </>
  );
}
