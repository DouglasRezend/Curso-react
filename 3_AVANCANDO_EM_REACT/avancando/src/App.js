import logo from './logo.svg';
import './App.css';
import f7 from './assets/f7.jpg';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';

function App() {
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
    </div>
  );
}

export default App;
