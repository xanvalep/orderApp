
export default function Header (props) {
let toolHeader = undefined;
if (props.tools && props.tools.length > 0) {
  toolHeader =  <th scope="col">Tool</th> 
}
    return(
        <thead>
        <tr>
          {props.columns.map(  (value,index)=> {return <th scope="col">{value}</th>}) }
        
          {toolHeader}
        </tr>
      </thead>
    );
}