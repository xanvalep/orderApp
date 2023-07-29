import Header from "./Header";
import Body from "./Body";

import "..//..//scss/Form.css";
export default function Table(props) {
  return (
    <table className="table mx-auto">
      <caption>{props.name}</caption>
      <Header columns={props.columnsAlias} tools={props.tools} />
      <Body
        data={props.data}
        path={props.path}
        columns={props.columns}
        tools={props.tools}
      />
    </table>
  );
}
