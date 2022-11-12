import Row from "./Row";
export default function Body (props) {

    return(
        
        <tbody class="table-group-divider">
          {props.data.map(
            (value,index)=>{
              return <Row  rowData={value} columns={props.columns} tools={props.tools} path={props.path}/> 
            }
          )}
          
          <tr>
            
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>goku </td>
            <td>@twitter</td>
          </tr>
        </tbody>

    );
}