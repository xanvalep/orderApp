import Cell from "./Cell";
import Tools from "./Tools";

export default function Row(props) {
    return( 
    <tr>
       
        { props.columns.map((value,index) => { return <Cell value={props.rowData[value]} index={index}/> } ) }
        
        <Tools path={props.path} tools={props.tools} id={props.rowData[props.columns[0]]}/>
        </tr>
     ); 
     }

    