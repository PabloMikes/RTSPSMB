import { Link } from "react-router-dom"

export default function CarLink(props){


    return(
        <>
            <Link to={`/car/${props._id}`}>
                <p>Model: {props.model}</p>
                <p>View car: {props._id}</p>
            </Link>
        </>
    )
}