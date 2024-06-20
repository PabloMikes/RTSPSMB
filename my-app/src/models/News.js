export const getAllNews = async () =>{
    const req = await fetch("http://localhost:3000/news", {
        headers: {
            "Content-Type": "application/json",
            "Accpet": "application/json"
        },
        method: "GET"
    });
    const data = await req.json();
    return{
        payload: data.payload,
        msg: data.msg,
        status: req.status
    }
}
export const getNews = async (id) =>{
    const req = await fetch(`http://localhost:3000/news/${id}`, {
        headers: {
            "Content-Type": "application/json",
            "Accpet": "application/json"
        },
        method: "GET"
    });
    const data = await req.json();
    return{
        payload: data.payload,
        msg: data.msg,
        status: req.status
    }
}
export const createNews = async (formData) =>{
    const req = await fetch("http://localhost:3000/news", {
        headers: {
            "Content-Type": "application/json",
            "Accpet": "application/json"
        },
        method: "POST",
        body: JSON.stringify(formData)
    });
    const data = await req.json();
    return{
        payload: data.payload,
        msg: data.msg,
        status: req.status
    }
}
export const updateNews = async (id, formData) =>{
    const req = await fetch(`http://localhost:3000/news/${id}`, {
        headers: {
            "Content-Type": "application/json",
            "Accpet": "application/json"
        },
        method: "PUT",
        body: JSON.stringify(formData)
    });
    const data = await req.json();
    return{
        payload: data.payload,
        msg: data.msg,
        status: req.status
    }
}
export const deleteNews = async (id) =>{
    const req = await fetch(`http://localhost:3000/news/${id}`, {
        headers: {
            "Content-Type": "application/json",
            "Accpet": "application/json"
        },
        method: "DELETE"
    });
    const data = await req.json();
    return{
        payload: data.payload,
        msg: data.msg,
        status: req.status
    }
}