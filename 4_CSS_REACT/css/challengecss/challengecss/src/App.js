import './App.css';
import Car from './components/Car';

function App() {
  const myCars = [
    { name: "Ka", km: 12000 , color: "Preta" },
    { name: "Palio", km: 46000 , color: "Cinza" },
    { name: "Punto", km: 0 , color: "Branco" },
  ];
  return (
    <div className="App">
      <h1>Showroom de carros</h1>
      <div className="car-container">
        {myCars.map((car) =>(
          <Car car = {car}/>

        ))}

      </div>
      
    </div>
  );
}

export default App;
