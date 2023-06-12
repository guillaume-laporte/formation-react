import React from 'react';
import './App.css';
import Button from './components/ui/Button/Button'

function App() {
  return (
    <div className="App">
      <Button bgColor='tomato'><img alt="" src="./img/ok_sub.png" /> ok</Button>
      <Button text="cancel" onClick={(unParamDeLenfant) => console.log("fonction envoyée part le parent - ", unParamDeLenfant)}></Button>
    </div>
  );
  // <Button children={<div><img alt="" src="./img/ok_sub.png" /> <span>ok</span></div>}></Button> => {props.children}
  // <Button><img alt="" src="./img/ok_sub.png" /> ok</Button> => => {props.children} aussi
  // <Button text="cancel"></Button> => {props.text}
  // <Button style={{fontSize: '48pt'}}>AAA</Button> => {props.text}
}

export default App;
