export default function Cell(props) {
    if (props.index === 0 ) {
        return  <th scope="row">{props.value}</th>
    }
    return <td>{props.value}</td>
}