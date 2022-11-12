
import { Link } from "react-router-dom"
export default function ActualizarTools (props) {
    let url = props.path +  '/update/' + props.id ;
    return(
        <Link to= {url}>
        <i class="bi bi-pencil-fill"></i>
        </Link>
    )   
}   
