import UserIndex from "..//users/UserIndex";
import LoginView from "../Login";
import Home from "../Home";
import Menu from "..//menu/Menu";
import logo from "./logopizza.svg"
import LogButton from "../nav/LogButton";
import "..//..//scss/nav.scss";
import { Link, Route, Routes } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div className="container">
      <header
        id="header"
        className="d-flex flex-sm-column flex-md-row justify-content-around"
      >
        <div className="d-flex justify-content-center align-items-center">
          <img src={logo} alt="Logo" />
        </div>
        <nav id="navbar" className="navbar nav-menu">
          <ul className="d-flex flex-row justify-content-center">
            <li>
              <Link className="nav-link scrollto " to="/">
                Home
              </Link>
            </li>

            <li>
              <Link className="nav-link scrollto" to="/menu">
                Menu
              </Link>
            </li>

            <li>
              <Link className="nav-link scrollto" to="/userAdmin">
                Admin
              </Link>
            </li>
          </ul>
        </nav>
        <div className="d-flex justify-content-center align-items-center">
          <LogButton logged={props.logged} />
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/userAdmin" element={<UserIndex />} />
      </Routes>
    </div>
  );
}
