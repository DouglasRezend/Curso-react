import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(false);

    const [name , setName] = useState("Pedro")
  return (
    <div>
        <h1>isso será exibido ?</h1>
        {x && <p>Se x for true ,sim!</p>}
        {!x && <p>Agora x é falso!</p>}
        <h1>If ternário</h1>
        {name === "João" ? (
            <div> 
                <p>o nome é João</p>
                </div>
        ) : (
            <div>
               <p>nome não encontrado!</p> 
            </div>
        )}
        <button onClick={() => setName ("João")}>Clica aqui!</button>
    </div>
  )
}

export default ConditionalRender