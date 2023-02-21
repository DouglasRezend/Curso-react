
import './App.css';
import f7 from './assets/f7.jpg';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  //const name ="Pedrin"
  const [userName] = useState("Marquin")

  const cars = [
    {id: 1, brand: "Ferrari",color:"amarela", newCar: true, km:0},
    {id: 2, brand: "Kia",color:"verde", newCar: false, km:12323},
    {id: 3, brand: "Renault",color:"azul", newCar: false, km:123123}
  ];
  function showMessage() {
    console.log("Evento de componente pai!")
  }

  const [message , setMessage] = useState ("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const users = [
    {id: 1, name:"Douglas", job:"Programador", age: 26},
    {id: 2, name:"Adriana", job:"Designer de interiores", age: 29},
    {id: 3, name:"Neia", job:"cozinheira", age: 52},
    {id:4, name:"Pedro",job:"Estudante", age:17}
  ]

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
      {/* loop em array de objetos*/}
      {cars.map((car) =>(
        <CarDetails
        key={car.id}
          brand ={car.brand} color={car.color} km={car.km} newCar={car.newCar}/>
      ))}
      {/*fragment */}
      <Fragment propFragment ="teste"/>
      {/*children*/}
      <Container myValue="testing">
        <p>e este é o conteudo</p>
      </Container>
      <Container myValue="testing 2">
        <h4>Testando o container</h4>
      </Container>
      {/*executar funçao*/ }
      <ExecuteFunction myFunction={showMessage}/>
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage ={handleMessage}/>
      {/* Desafio */}
      {users.map((user) =>(
        <UserDetails 
        key={user.id}
        name={user.name}
        job={user.job}
        age={user.age}
        />

      ))}

    </div>
  );
}

export default App;
