import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createCar } from "../../models/car"

export default function CarCreateForm(){

    const [formData, setFormData] = useState();
    const [info, setInfo] = useState();
    const navigate = useNavigate();

    const postForm = async () =>{
        const car = await createCar(formData);
        if(car.status === 201){
            redirectToSuccesPage(car.payload._id);
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

    const redirectToSuccesPage = (id) =>{
        return navigate(`/createdCar/${id}`)
    }



    return(
        <>
        <h1>Car create form</h1>
        <form>
            <input type="text" name="brand" required placeholder="Enter brand" onChange={e => handleChange(e)} />
            <input type="text" name="model" required placeholder="Enter model" onChange={e => handleChange(e)} />
            <input type="text" name="color" required placeholder="Enter color" onChange={e => handleChange(e)} />
            <input type="number" name="price" required placeholder="Eneter price" onChange={e => handleChange(e)} />
            <button onClick={handlePost}>
                Create Car
            </button>
        </form>
        <Link to={"/"}>
            <p>Go back</p>
        </Link>
        </>
    )
}