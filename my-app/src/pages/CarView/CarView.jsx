import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCar, deleteCar } from "../../models/car";

export default function CarView() {
  const { id } = useParams();
  const [car, setCar] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getCar(id);
    if (data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setCar(data.payload);
      setLoaded(true);
    }
  };

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (car.model === formData) {
      const data = await deleteCar(id);
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
        <p>Car not found 3:</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>Car is loading :3</p>
      </>
    );
  }

  return (
    <>
      <h1>See your car here</h1>
      <p>{id}</p>
      <p>{car.brand}</p>
      <p>{car.model}</p>
      <p>{car.color}</p>
      <p>{car.price}</p>
      <Link to={`/updatecar/${id}`}>
        <p>Update car</p>
      </Link>
      <form>
        <input type="text" onChange={handleChange} placeholder={car.model} />
        <button onClick={handleDelete}>Delete Car</button>
        <p>{info}</p>
      </form>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
