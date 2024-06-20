import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { updateCar, getCar } from "../../models/car";

export default function CarUpdateForm() {
  // useParams - vytazeni hodnoty z dynamickeho parametru url adresy
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

  const postForm = async () =>{
    const car = await updateCar(id, formData);
    if(car.status === 200){
        navigate(`/car/${id}`)
    }
    else{
        setInfo(car.msg);
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
      <h1>Update your car for free</h1>
      <p>{id}</p>
      <form>
            <input type="text" defaultValue={car.brand} name="brand" required placeholder="Enter brand" onChange={e => handleChange(e)} />
            <input type="text" defaultValue={car.model} name="model" required placeholder="Enter model" onChange={e => handleChange(e)} />
            <input type="text" defaultValue={car.color} name="color" required placeholder="Enter color" onChange={e => handleChange(e)} />
            <input type="number" defaultValue={car.price} name="price" required placeholder="Eneter price" onChange={e => handleChange(e)} />
            <button onClick={handlePost}>
                Update Car
            </button>
        </form>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
