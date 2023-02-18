const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e);
        console.log("ativou o evento!")
    };
    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("clicou!")}>Clique aqui também!</button>
                <button onClick={() => {
                    console.log("isso não deveria existir =)")
                }}
                >
                    Clique aqui, por favor.
                    </button>
            </div>
        </div>
    )
} ;

export default Events;