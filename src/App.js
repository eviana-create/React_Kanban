import "./styles.css";
import Navbar from "./componentes/Navbar/Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <ul className="lista">
      <li>Treinando React</li>
      <li>Treinando Componentes</li>
      </ul>
    </div>
  );
}
