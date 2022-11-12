import { Link } from "react-router-dom"
export default function EliminarTools (props) {
    let url = props.path +  '/delete/' + props.id ;
    return(
        <Link to= {url}>
        <i class="bi bi-trash-fill"></i>
        </Link>
        

    ) 
}