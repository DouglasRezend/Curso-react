import logo from './logo.svg';
import './App.css';
import f7 from './assets/f7.jpg';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';
import CarDetails from './components/CarDetails';

function App() {
  const name ="Pedrin"
  const [userName] = useState("marquin")
  return (
    <div className="App">
      <h1>Avançando em React</h1>
    {/*imagem em public*/}
      <div>
    <img src="/f2.jpg" alt="cidade" />
      </div>
      {/* imagem em asset*/}
      <div>
        <img src={f7} alt="cidade" />
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {/*props*/}
      <ShowUserName name={userName}/>
      {/*destructuring*/}
      <CarDetails brand="Vw" km={100000} color="Azul" newCar ={false}/>
      {/*reaproveitamento*/}
      <CarDetails brand ="Ford" km={0} color="Vermelha" newCar ={true} />
      <CarDetails brand ="Fiat" km={1000} color="Preto" newCar ={false} />
    </div>
  );
}

export default App;
