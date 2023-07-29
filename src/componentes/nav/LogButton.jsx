import { Link } from "react-router-dom";
import "..//..//scss/button.scss";
export default function LogButton(props) {
  let logButton = undefined;
  if (props.logged) {
    logButton = <button className="btn btn-outline-danger">LogOut</button>;
  } else {
    logButton = (
      <Link to={"/login"}>
        <button className="btn btn-outline-none">
          <i class="bi bi-person-workspace"></i>
        </button>
      </Link>
    );
  }
  return <div>{logButton}</div>;
}
