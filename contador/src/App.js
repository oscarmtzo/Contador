import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [conteo, setConteo] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  let [frase, setFrase] = useState("Iniciar")
  useEffect(() => {
      let intervalId = setInterval( () => {
        if(isCounting) {
          setConteo( (prevConteo) => prevConteo + 1)
        }
      },1000)
      if(!isCounting && conteo >= 1) {
        setFrase("Continuar")
      }
      else if(!isCounting && conteo < 1) {
        setFrase("Iniciar")
      } else if (isCounting && conteo >= 1) {
        setFrase("Parar")
      } 
      return () => clearInterval(intervalId)
    },
    [isCounting, conteo]
  )
  
  const handleClick = () => {
    if (isCounting) {
      setIsCounting(false)
    } 
    else {
      setIsCounting(true)
    }
  }
  const reiniciar = () => {
    setConteo(
      (prevConteo) => prevConteo = 0
    )
  }
  return (
    <div className="App">
      <h1>{conteo}</h1>
      <h4>Esta contando?: {`${isCounting}`}</h4>
      <button
        onClick={handleClick}
        >{frase}</button>
      <button
        onClick={reiniciar}
        >Reiniciar</button>
    </div>
  );
}

export default App;
