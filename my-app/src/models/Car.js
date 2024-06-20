export const getCars = async () =>{
    const req = await fetch("http://localhost:3000/cars", {
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
export const getCar = async (id) =>{
    const req = await fetch(`http://localhost:3000/cars/${id}`, {
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
export const createCar = async (formData) =>{
    const req = await fetch("http://localhost:3000/cars", {
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
export const updateCar = async (id, formData) =>{
    const req = await fetch(`http://localhost:3000/cars/${id}`, {
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
export const deleteCar = async (id) =>{
    const req = await fetch(`http://localhost:3000/cars/${id}`, {
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