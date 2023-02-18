import MyComponent from "./MyComponent";

// arquivos de estilo
const FirstComponent = () => {
    //essa funçao faz isso
    
    /*
    muiti line
    */
    return(
      
        <div>
             {/*algum comentario */}
        <h1>Meu primeiro componente</h1>
        <p className="teste">Meu texto</p>
        <MyComponent />
        </div>
    );
};

export default FirstComponent;
