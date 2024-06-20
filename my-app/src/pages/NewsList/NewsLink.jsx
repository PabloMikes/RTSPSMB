import { Link } from "react-router-dom"

export default function NewsLink(props){


    return(
        <>
            <Link to={`/news/${props._id}`}>
                <p>{props.header}</p>
            </Link>
        </>
    )
}