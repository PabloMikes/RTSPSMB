import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createNews } from "../../models/News"

export default function NewsCreateForm(){

    const [formData, setFormData] = useState();
    const [info, setInfo] = useState();
    const navigate = useNavigate();

    const postForm = async () =>{
        const news = await createNews(formData);
        if(news.status === 201){
            redirectToSuccesPage(news.payload._id);
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

    const redirectToSuccesPage = (id) =>{
        return navigate(`/createdNews/${id}`)
    }



    return(
        <>
        <h1>News create form</h1>
        <form>
            <input type="text" name="creator" required placeholder="Enter creator" onChange={e => handleChange(e)} />
            <input type="date" name="date" required placeholder="Enter date" onChange={e => handleChange(e)} />
            <input type="header" name="header" required placeholder="Enter header" onChange={e => handleChange(e)} />
            <input type="text" name="text" required placeholder="Enter text" onChange={e => handleChange(e)} />
            <button onClick={handlePost}>
                Create News
            </button>
        </form>
        <Link to={"/"}>
            <p>Go back</p>
        </Link>
        </>
    )
}