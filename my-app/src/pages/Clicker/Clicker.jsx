import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Clicker(){
    // hooky pozname pomoci pocinajiciho slova use
    //  nazev promenne, setter = useState(zakladni_hodnota)
    const [cookies, setCookies] = useState(0);


    //funkce useEffectu se zavola, kdyz se hodnota v [] zmeni 
    useEffect(() =>{
        document.title = `Cookies> ${cookies}`
    }, [cookies])


    //pokud nechame [] prazdne , fce useEffectu se zavola jen pri nacteni componenty
    useEffect(() =>{
        document.title = `Page loaded`
    }, [])

    const increaseCookies = () =>{
        setCookies(cookies + 1);
    }


    return(
        <>
            <h1>Clicker fr hodne tady muzes delat jak zmrd</h1>
            <button onClick={increaseCookies}> Increase Cookies</button>
            <p>Cookies: {cookies}</p>
            <Link to={"/"}>
                <p>go back</p>
            </Link>
        </>
    )
}