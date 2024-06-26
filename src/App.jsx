import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Titulo from './Components/Titulo';

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <div className="container"> 
        <Titulo>Componente Home</Titulo> 
        <Home /> 
      </div>
    </div>
  );
}

export default App;