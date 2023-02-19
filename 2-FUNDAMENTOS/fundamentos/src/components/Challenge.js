const Challenge = () => {
    const a = 20;
    const b = 6;

  return (
    <div>
        <p>A: {a}</p>
        <p>B: {b}</p>
        <button onClick = {() => console.log (a + b)}> Clique aqui para somar!</button>
    </div>
  );
};

export default Challenge;