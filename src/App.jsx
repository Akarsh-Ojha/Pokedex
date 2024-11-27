import './App.css';
import CustomRoutes from './Routers/CustomRoutes';
import { Link } from "react-router-dom" 

function App() {
  return (

    <div className="outerPokedex">
      <h1 id="pokemon-name">
        <Link to='/'>Pokedex</Link>
        </h1>
      <CustomRoutes />
    </div>
  );
}

export default App;
