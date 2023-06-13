import React, {useState, useEffect} from 'react';
import './App.css';
import Button from './components/ui/Button/Button'

function App() {
  const [counter, setcounter] = useState(0);

  // componentDidUpdate
  useEffect(() => {
    console.log("value post setCounter", counter);
    return () => {
      // démontage du DOM
      // console.log("cleanup"); // effect
    };
  }, [counter]);

  // componentDidMount
  useEffect(() => {
    console.log("création du composant, set des états initiaux");
    setcounter(1);
  }, []);

  console.log("rendu");

  return (
    <div className="App">
      Voici la valeur de counter : {counter}
      <hr />
      <Button className="error" onClick={() => {
        setcounter(counter - 1);
        console.log(counter);
      }}>-1</Button>
      <Button onClick={() => {
        setcounter(counter + 1);
        console.log(counter);
      }}>+1</Button>
    </div>
  );
  // <Button children={<div><img alt="" src="./img/ok_sub.png" /> <span>ok</span></div>}></Button> => {props.children}
  // <Button><img alt="" src="./img/ok_sub.png" /> ok</Button> => => {props.children} aussi
  // <Button text="cancel"></Button> => {props.text}
  // <Button style={{fontSize: '48pt'}}>AAA</Button> => {props.text}
  // <Button bgColor='tomato' text="cancel"></Button>
  // <Button onClick={(unParamDeLenfant) => console.log("validate - ", unParamDeLenfant)}>validate</Button>
}

export default App;
