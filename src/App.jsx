import "./scss/App.scss";
import "./componentes/Footer";
import NavBar from "./componentes/nav/NavBar";
import Footer from "./componentes/Footer";

export default function App() {
  return (
    <div>
      <NavBar logged={false} />
      <Footer />
    </div>
  );
}
