import './App.css';
import MyComponent from './components/MyComponent';

import {useState} from "react";
import Title from './components/Title';
function App() {

  const n = 15
  const [name] = useState("Douglas")

  const redTitle = false

  return (
    <div className="App">
      {/*CSS global*/}
      <h1>React com CSS</h1>
      {/*CSS de componente */}
      <MyComponent />
      <p>este páragrafo e do app.js</p>
      <p className="my-comp-paragraph">este tb é do componente</p>
      {/*inline css*/}
      <p style={{color:"magenta", padding:"25px", borderTop: "2px solid red" }}>Este elemento foi estilizado de forma inline</p>
      <p style={{color:"magenta", padding:"25px", borderTop: "2px solid red" }}>Este elemento foi estilizado de forma inline</p>
      {/* CSS inline dinâmico */}
      <h2 style={n < 10 ? ({color:"purple"}) : ({color: "pink"}) } >CSS dinâmico</h2>
      <h2 style={n > 10 ? ({color:"purple"}) : ({color: "pink"}) } >CSS dinâmico</h2>
      
      <h2 style={
        name === "Douglas"
         ? ({color:"green" , backgroundColor: "#000"}) : null} >teste nome </h2>
         {/* Classe dinâmica */}
         <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>
         {/* css modules */}
         <Title/>
    </div>
  );
}

export default App;
