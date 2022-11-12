import EliminarTools from './EliminarTools';
import ActualizarTools from "./ActualizarTools";
export default function Tools (props) {
   if (props.tools && props.tools.length > 0) { 
    let toolsElement = []; 
    if (props.tools.indexOf('update')>=0) {
        toolsElement.push(
ActualizarTools({
    
        path:props.path,
        id: props.id
    
})
        )
     }
     if (props.tools.indexOf('delete')>=0) {
        toolsElement.push(
EliminarTools({
    
        path:props.path,
        id: props.id
    
})
        )
     }
     return <td>{toolsElement}</td> ;
        
    }
    return null
   }

